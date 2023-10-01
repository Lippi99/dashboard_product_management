import * as Dialog from "@radix-ui/react-dialog";
import { keyframes, styled } from "../../../stitches.config";
import { InputControlled } from "../InputControlled";
import {
  Button as AntButton,
  DatePicker,
  DatePickerProps,
  notification,
} from "antd";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProduct } from "../../services/product";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { Box } from "../Box";
import { Grid } from "../Grid";
import { useState } from "react";
import dayjs from "dayjs";

interface EditDialogProps {
  title: string;
  action?: () => void;
  register?: any;
  data: ProductProps;
}

interface ProductProps {
  id: string;
  quantity: number;
  productName: string;
  price: number;
  materialPrice: number;
  commission: number;
  labor: number;
}

const schema = Yup.object({
  quantity: Yup.string().required("Digite uma quantidade"),
  productName: Yup.string().required("Digite o nome do produto"),
  price: Yup.string().required("Digite o valor do produto"),
  materialPrice: Yup.string().required("Digite o valor da matéria-prima"),
  commission: Yup.string().required("Digite o valor da comissão"),
  labor: Yup.string().required("Digite o valor a mão de obra"),
});

export const EditDialog = ({ data, title }: EditDialogProps) => {
  const [api, contextHolder] = notification.useNotification();
  const [dateStart, setDateStart] = useState<string>();
  const [dateEnd, setDateEnd] = useState<string>();

  const productID = data.id;

  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductProps>({
    resolver: yupResolver(schema),
  });

  const openNotificationWithIcon = (
    type: "success" | "error",
    message: string,
    description: string
  ) => {
    api[type]({
      message: message,
      description: description,
    });
  };

  const handleChangeData: DatePickerProps["onChange"] = (date, dateString) => {
    const dateYear = dayjs(dateString).year();
    const dateMonth = dayjs(dateString).month() + 1;

    const dateStart = `${dateYear}-${dateMonth}-01`;
    const dateEnd = `${dateYear}-${dateMonth}-31`;

    setDateStart(dateStart);
    setDateEnd(dateEnd);
  };

  const { mutate: mutateUpdateProduct, isLoading } = useMutation({
    mutationFn: (values: ProductProps) => updateProduct(productID!, values),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getProductList"],
      }),
        queryClient.invalidateQueries({ queryKey: ["productWidget"] });
      openNotificationWithIcon(
        "success",
        "Produto atualizado com sucesso!",
        ""
      );
    },
  });

  const overlayShow = keyframes({
    "0%": { opacity: 0 },
    "100%": { opacity: 1 },
  });

  const DialogOverlay = styled(Dialog.Overlay, {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    position: "fixed",
    zIndex: 500,
    inset: 0,
    animation: `${overlayShow} `,
  });

  const Button = styled("button", {
    all: "unset",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    padding: "0 15px",
    fontSize: 15,
    lineHeight: 1,
    fontWeight: 500,
    height: 35,

    variants: {
      variant: {
        create: {
          backgroundColor: "#1677ff",
          cursor: "pointer",
          color: "white",
          fontFamily: "$general",
          fontWeight: 1000,
          "&:hover": { backgroundColor: "#4096ff", transition: "200ms" },
          "&:focus": { boxShadow: `0 0 0 2px black` },
        },
        loading: {
          backgroundColor: "#ccc",
          cursor: "not-allowed",
          color: "white",
          fontFamily: "$general",
          fontWeight: 1000,
        },
      },
    },
  });

  const DialogContent = styled(Dialog.Content, {
    backgroundColor: "white",
    borderRadius: 6,
    boxShadow:
      "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90vw",
    zIndex: 500,
    maxWidth: "800px",
    height: "70vh",
    padding: 25,
    "&:focus": { outline: "none" },
  });

  const DialogTitle = styled(Dialog.Title, {
    margin: 0,
    color: "rgb(26, 21, 35)",
    fontSize: "1.3rem",
    fontWeight: 1000,
    fontFamily: "$general",
  });

  const Flex = styled("div", { display: "flex" });

  const IconButton = styled("button", {
    all: "unset",
    fontFamily: "inherit",
    borderRadius: "100%",
    height: 25,
    width: 25,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    color: "black",
    cursor: "pointer",
    position: "absolute",
    top: 10,
    right: 10,

    "&:hover": { backgroundColor: "#ccc" },
    "&:focus": { boxShadow: `0 0 0 2px #ccc` },
  });

  const Fieldset = styled("fieldset", {
    all: "unset",
    display: "flex",
    gap: 20,
    alignItems: "center",
    marginBottom: 15,
  });

  const Label = styled("label", {
    fontSize: 15,
    color: "rgb(87, 70, 175)",
    textAlign: "left",
    marginBottom: 10,
  });

  const Input = styled(InputControlled, {
    all: "unset",
    width: "100%",
    flex: "1",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    padding: "0 10px",
    fontSize: 15,
    lineHeight: 1,
    color: "rgb(87, 70, 175)",
    boxShadow: `0 0 0 1px rgb(87, 70, 150)`,
    height: 35,

    "&:focus": { boxShadow: `0 0 0 2px  rgb(170, 153, 236) t` },
  });

  return (
    <>
      {contextHolder}

      <Dialog.Root>
        <Dialog.Trigger asChild>
          <AntButton type="primary">Atualizar</AntButton>
        </Dialog.Trigger>
        <Dialog.Portal>
          <DialogOverlay />
          <DialogContent>
            <DialogTitle>{title}</DialogTitle>
            <form onSubmit={handleSubmit(mutateUpdateProduct as any)}>
              <Grid css={{ mt: "$4" }} align="center" columns="2">
                <Fieldset>
                  <Flex css={{ flexDirection: "column" }}>
                    <Label>Nome do produto</Label>
                    <Input
                      defaultValue={data.productName}
                      placeholder="Nome do produto..."
                      type="text"
                      register={{ ...register("productName") }}
                      errorMessage={errors.productName?.message}
                    />
                  </Flex>
                </Fieldset>
                <Fieldset>
                  <Flex css={{ flexDirection: "column" }}>
                    <Label>Quantidade</Label>
                    <Input
                      defaultValue={data.quantity}
                      placeholder="Quantidade"
                      type="number"
                      step=".01"
                      register={{ ...register("quantity") }}
                      errorMessage={errors.quantity?.message}
                    />
                  </Flex>
                </Fieldset>
                <Fieldset>
                  <Flex css={{ flexDirection: "column" }}>
                    <Label>Valor do produto</Label>
                    <Input
                      defaultValue={data.price}
                      placeholder="Preço"
                      type="number"
                      step=".01"
                      register={{ ...register("price") }}
                      errorMessage={errors.price?.message}
                    />
                  </Flex>
                </Fieldset>
                <Fieldset>
                  <Flex css={{ flexDirection: "column" }}>
                    <Label>Material</Label>
                    <Input
                      defaultValue={data.materialPrice}
                      placeholder="Preço do material"
                      type="number"
                      step=".01"
                      register={{ ...register("materialPrice") }}
                      errorMessage={errors.materialPrice?.message}
                    />
                  </Flex>
                </Fieldset>
                <Fieldset>
                  <Flex css={{ flexDirection: "column" }}>
                    <Label>Comissão</Label>
                    <Input
                      defaultValue={data.commission}
                      placeholder="Comissão"
                      type="number"
                      step=".01"
                      register={{ ...register("commission") }}
                      errorMessage={errors.commission?.message}
                    />
                  </Flex>
                </Fieldset>
                <Fieldset>
                  <Flex css={{ flexDirection: "column" }}>
                    <Label>Mão de obra</Label>
                    <Input
                      defaultValue={data.labor}
                      placeholder="labor"
                      type="number"
                      step=".01"
                      register={{ ...register("labor") }}
                      errorMessage={errors.labor?.message}
                    />
                  </Flex>
                </Fieldset>

                <Box css={{ position: "absolute", right: 20, bottom: 10 }}>
                  {isLoading ? (
                    <Button variant="loading">Carregando...</Button>
                  ) : (
                    <Button variant="create">Atualizar produto</Button>
                  )}
                </Box>
              </Grid>
            </form>

            <Dialog.Close asChild>
              <IconButton aria-label="Close">&#10006;</IconButton>
            </Dialog.Close>
          </DialogContent>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};

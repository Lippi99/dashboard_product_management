import * as Dialog from "@radix-ui/react-dialog";
import { keyframes, styled } from "../../../stitches.config";
import { InputControlled } from "../InputControlled";
import { Button as AntButton } from "antd";

interface EditDialogProps {
  title: string;
  action: () => void;
  register: any;
}

export const EditDialog = ({ title, action, register }: EditDialogProps) => {
  // styles
  const overlayShow = keyframes({
    "0%": { opacity: 0 },
    "100%": { opacity: 1 },
  });

  const contentShow = keyframes({
    "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
    "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
  });

  const DialogOverlay = styled(Dialog.Overlay, {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    position: "fixed",
    inset: 0,
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
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
    maxWidth: "450px",
    maxHeight: "85vh",
    padding: 25,
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
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
        violet: {
          backgroundColor: "white",
          color: "red",
          boxShadow: `0 2px 10px red`,
          "&:hover": { backgroundColor: "red" },
          "&:focus": { boxShadow: `0 0 0 2px black` },
        },
        green: {
          backgroundColor: "rgb(221, 243, 228)",
          color: "rgb(24, 121, 78)",
          cursor: "pointer",
          fontFamily: "$general",
          fontWeight: 1000,
          "&:hover": { backgroundColor: "rgb(204, 235, 215)" },
          "&:focus": { boxShadow: `0 0 0 2px rgb(204, 235, 215)` },
        },
      },
    },

    defaultVariants: {
      variant: "violet",
    },
  });

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
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <AntButton type="primary">Editar</AntButton>
      </Dialog.Trigger>
      <Dialog.Portal>
        <DialogOverlay />
        <DialogContent>
          <DialogTitle>{title}</DialogTitle>

          <Fieldset>
            <Flex css={{ mt: "$4", flexDirection: "column" }}>
              <Label htmlFor="productName">Nome do produto</Label>
              <Input
                id="productName"
                register={{ ...register("productName") }}
              />
            </Flex>
          </Fieldset>
          <Fieldset>
            <Flex css={{ flexDirection: "column" }}>
              <Label htmlFor="productValue">Valor do produto</Label>
              <Input
                type="number"
                id="productValue"
                register={{ ...register("productValue") }}
              />
            </Flex>
          </Fieldset>
          <Fieldset>
            <Flex css={{ flexDirection: "column" }}>
              <Label htmlFor="productTotal">Total</Label>
              <Input
                type="number"
                id="productTotal"
                register={{ ...register("productTotal") }}
              />
            </Flex>
          </Fieldset>
          <Flex css={{ marginTop: 25, justifyContent: "flex-end" }}>
            <Dialog.Close asChild>
              <Button onClick={action} variant="green">
                Atualizar produto
              </Button>
            </Dialog.Close>
          </Flex>
          <Dialog.Close asChild>
            <IconButton aria-label="Close">X</IconButton>
          </Dialog.Close>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

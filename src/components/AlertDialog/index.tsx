import * as Alert from "@radix-ui/react-alert-dialog";
import { keyframes, styled } from "../../../stitches.config";
import { Flex } from "../Flex";
import { Button as AntButton } from "antd";

interface AlertDialogProps {
  title: string;
  description?: string;
  action: () => void;
}

export const AlertDialog = ({
  title,
  description,
  action,
}: AlertDialogProps) => {
  const overlayShow = keyframes({
    "0%": { opacity: 0 },
    "100%": { opacity: 1 },
  });

  const contentShow = keyframes({
    "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
    "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
  });

  const AlertDialogOverlay = styled(Alert.Overlay, {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    position: "fixed",
    inset: 0,
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  });

  const AlertDialogContent = styled(Alert.Content, {
    backgroundColor: "white",
    borderRadius: 6,
    boxShadow:
      "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90vw",
    maxWidth: "500px",
    maxHeight: "85vh",
    padding: 25,
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,

    "&:focus": { outline: "none" },
  });

  const AlertDialogTitle = styled(Alert.Title, {
    margin: 0,
    color: "rgb(26, 21, 35)",
    fontSize: "1.3rem",
    fontWeight: 1000,
    fontFamily: "$general",
  });

  const AlertDialogDescription = styled(Alert.Description, {
    marginTop: 20,
    marginBottom: 30,
    fontSize: "1rem",
    color: "$text",
    fontWeight: 500,
    fontFamily: "$general",
    lineHeight: 1.5,
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
        danger: {
          backgroundColor: "rgb(255, 229, 229)",
          cursor: "pointer",
          color: "rgb(205, 43, 49)",
          fontFamily: "$general",
          fontWeight: 1000,
          "&:hover": { backgroundColor: "rgb(253, 216, 216)" },
          "&:focus": { boxShadow: `0 0 0 2px black` },
        },
        cancel: {
          backgroundColor: "rgb(238, 237, 239)",
          cursor: "pointer",
          color: "rgb(111, 110, 119)",
          fontFamily: "$general",
          fontWeight: 700,
          "&:hover": { backgroundColor: "rgb(233, 232, 234)" },
          "&:focus": { boxShadow: `0 0 0 2px black` },
        },
      },
    },
  });

  return (
    <Alert.Root>
      <Alert.Trigger>
        <AntButton type="primary" danger>
          Excluir
        </AntButton>
      </Alert.Trigger>
      <Alert.Portal>
        <AlertDialogOverlay className="AlertDialogOverlay" />
        <AlertDialogContent className="AlertDialogContent">
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription className="AlertDialogDescription">
            {description}
          </AlertDialogDescription>
          <Flex justify="between">
            <Alert.Cancel asChild>
              <Button variant="cancel">Cancelar</Button>
            </Alert.Cancel>
            <Alert.Action asChild onClick={action}>
              <Button variant="danger">Sim, deletar produto</Button>
            </Alert.Action>
          </Flex>
        </AlertDialogContent>
      </Alert.Portal>
    </Alert.Root>
  );
};

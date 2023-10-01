import { styled } from "../../../stitches.config";

export const Container = styled("aside", {
  zIndex: 10,
  background: "$light",
  overflowX: "hidden",
  paddingTop: "$4",
  boxShadow: "0 0.125rem 0.375rem 0 rgb(161 172 184 / 12%)",

  ".menu": {
    position: "relative",
    textAlign: "center",
    minHeight: "calc(100vh - 160px)",
    ".item": {
      textAlign: "center",
      listStyle: "none",
      marginBottom: "$3",
      color: "#697a8d",
      fontFamily: "$general",
      padding: "$3 $2 $3 $2",
      borderRadius: "$5",
    },
  },
});

export const ContainerHeader = styled("div", {
  textAlign: "center",

  ".logo": {
    objectFit: "contain",
  },
});

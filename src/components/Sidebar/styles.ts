import { styled } from "../../../stitches.config";

export const Container = styled("aside", {
  width: "15rem",
  height: "100%",
  position: "fixed",
  left: 0,
  top: 0,
  zIndex: 10,
  background: "$light",
  overflowX: "hidden",
  paddingTop: "$4",
  boxShadow: "0 0.125rem 0.375rem 0 rgb(161 172 184 / 12%)",

  ".menu": {
    width: "15rem",

    ".item": {
      textAlign: "center",
      listStyle: "none",
      marginBottom: "$3",
      color: "#696cff",
      fontFamily: "$general",
      padding: "0 $2 0 $2",
      borderRadius: "$2",
    },
  },
});

export const ContainerHeader = styled("div", {
  width: "15rem",
  textAlign: "center",

  ".logo": {
    objectFit: "contain",
  },
});

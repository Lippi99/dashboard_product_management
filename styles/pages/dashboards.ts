import { styled } from "../../stitches.config";

export const Container = styled("main", {
  marginLeft: "15rem",
  marginTop: "5rem",
  position: "absolute",
  top: 0,
  right: 0,
  left: 0,
  zIndex: -1,
  background: "$background",
});

export const Text = styled("span", {
  color: "rgba(0, 0, 0, 0.88)",
  fontSize: "1rem",
});

export const Labor = styled("span", {
  variants: {
    variant: {
      danger: {
        color: "rgb(205, 43, 49)",
        fontFamily: "$price",
        fontWeight: 1000,
      },

      green: {
        color: "#28a745",
        fontFamily: "$price",
        fontWeight: 1000,
      },
    },
  },
});

import { styled } from "../../stitches.config";

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

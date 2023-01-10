import { styled } from "../../../stitches.config";

export const Container = styled("div", {
  width: "100%",
  maxWidth: "20rem",
  height: "11rem",
  padding: "$5",
  position: "relative",
  background: "$light",
  boxShadow: "0 0.125rem 0.375rem 0 rgb(161 172 184 / 12%)",
  borderRadius: "$4",

  "@bp2": {
    maxWidth: "31%",
  },
  "@bp7": {
    maxWidth: "100%",
  },

  ".title": {
    color: "$text",
    fontWeight: 500,
    fontFamily: "$general",
  },

  ".price": {
    fontSize: "2rem",
    marginTop: "$3",
    fontFamily: "$price",
    fontWeight: 500,
  },

  ".sinceWhen": {
    color: "$text",
    fontFamily: "$general",
  },
});

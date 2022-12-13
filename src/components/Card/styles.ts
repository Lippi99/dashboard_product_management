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

  ".title": {
    color: "rgb(105, 122, 141)",
    fontWeight: 500,
    fontFamily: "$general",
  },

  ".image": {
    position: "absolute",
    right: 35,
    top: 35,
  },

  ".price": {
    fontSize: "2rem",
    marginTop: "$3",
    fontFamily: "$price",
    fontWeight: 500,
  },

  ".sinceWhen": {
    color: "rgb(105, 122, 141)",
    fontFamily: "$general",
  },
});

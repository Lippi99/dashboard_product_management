import { styled } from "../../../stitches.config";

export const CardContainer = styled("div", {
  maxWidth: "50rem",
  position: "relative",
  width: "100%",
  background: "White",
  padding: "1rem",
  borderRadius: "15px",
  boxShadow: "rgb(161 172 184 / 12%) 0px 0.125rem 0.375rem 0px",
  ".card-title": {
    fontFamily: "$general",
    fontSize: "0.7rem",
    marginTop: "$2",
    marginLeft: "$6",
    marginBottom: "$4",
  },

  ".card-body": {
    height: "400px",
  },
});

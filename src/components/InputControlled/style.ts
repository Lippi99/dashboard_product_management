import { styled } from "../../../stitches.config";

export const InputGroup = styled("div", {
  ".label": {
    fontFamily: "$general",
  },

  ".error": {
    display: "block",
    margin: "10px 0 0 5px",
    color: "$danger",
  },
});

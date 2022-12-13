import { styled } from "../../../stitches.config";

export const Container = styled("div", {
  ".AvatarRoot": {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    verticalAlign: "middle",
    overflow: "hidden",
    userSelect: "none",
    width: "35px",
    height: "35px",
    borderRadius: " 100%",
    backgroundColor: "red",
  },

  ".AvatarImage": {
    width: " 100%",
    height: "100%",
    objectfit: "cover",
    borderRadius: "inherit",
  },

  ".AvatarFallback": {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    color: "green",
    fontSize: "15px",
    lineheight: 1,
    fontWeight: 500,
  },
});

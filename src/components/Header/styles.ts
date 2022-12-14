import { styled } from "../../../stitches.config";

export const Container = styled("header", {
  width: "100%",
  height: "5rem",
  position: "fixed",
  left: 0,
  top: 0,
  right: 0,
  background: "$light",
  paddingTop: "$4",
  zIndex: 1,
  boxShadow: "0 0.125rem 0.375rem 0 rgb(161 172 184 / 12%)",
});

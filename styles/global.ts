import { globalCss } from "../stitches.config";

export const globalStyles = globalCss({
  "*": { margin: 0, padding: 0, boxSizing: "border-box" },

  body: {
    background: "$background",
  },

  html: {
    "@bp3": {
      fontSize: "93.75%",
    },
    "@bp4": {
      fontSize: "87.5%",
    },
  },

  button: {
    cursor: "pointer",
    border: "none",
    background: "none",
  },

  a: {
    textDecoration: "none",
  },
});

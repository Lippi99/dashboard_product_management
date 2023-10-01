import { styled } from "../../stitches.config";

export const Container = styled("main", {
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: -1,
  background: "$salmon",
  overflow: "hidden",

  ".birdBluredContainer": {
    width: "550px",
    height: "100%",
    position: "relative",
    left: "0",
    top: "0",

    ".birdBluredImage": {
      position: "absolute",
      left: "0",
      bottom: "0",
    },
  },

  ".birdImage": {
    objectFit: "contain",
    position: "absolute",
    left: "80%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },
});

export const FormContainer = styled("div", {
  maxWidth: "28rem",
  width: "100%",
  height: "38rem",
  background: "rgb(255, 255, 255, 30%)",
  boxShadow: "0px 0px 12px 0px rgba(0,0,0,0.10)",
  borderRadius: "40px",
  position: "absolute",
  left: "5%",
  top: "10%",
  padding: "5rem 3rem 0 3rem",

  ".logo": {
    display: "block",
    margin: "0 auto",
    objectFit: "contain",
  },

  ".fieldSet": {
    width: "100%",
    border: "none",
  },

  ".signIn": {
    display: "block",
    width: "100%",
    height: "2.5rem",
    border: "none",
    borderRadius: "5px",
    outline: 0,
    background: "#F25019",
    marginTop: "20px",
    color: "$light",
    fontFamily: "$general",
  },

  ".loading": {
    display: "block",
    width: "100%",
    height: "2.5rem",
    border: "none",
    borderRadius: "5px",
    outline: 0,
    background: "#ccc",
    marginTop: "20px",
    color: "$light",
    fontFamily: "$general",
    cursor: "not-allowed",
  },
});

export const Redirect = styled("div", {
  marginTop: "1rem",

  ".text": {
    color: "Blue",
    textDecoration: "underline",
  },
});

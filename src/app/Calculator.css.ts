import { style } from "@vanilla-extract/css";

export const div = style({
  width: "100%",
  maxWidth: "328px",
  display: "flex",
  flexDirection: "column",

  marginTop: "auto",
  paddingBottom: "20dvh",
});

export const input = style({
  marginBottom: "12px",
});

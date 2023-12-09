import { style } from "@vanilla-extract/css";

export const div = style({
  width: "100%",
  maxWidth: "328px",
  display: "flex",
  flexDirection: "column",

  marginTop: "auto",
  paddingBottom: "20dvh",
});

export const label = style({
  fontSize: "20px",
  marginBottom: "8px",
});

export const input = style({
  fontSize: "20px",
  marginBottom: "12px",
  width: "100%",
});

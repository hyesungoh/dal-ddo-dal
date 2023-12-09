import { style } from "@vanilla-extract/css";
import { mediaScreen } from "~/style/mediaScreen";

export const main = style({
  width: "100%",
  height: "100dvh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  "@media": {
    [mediaScreen("328")]: {
      padding: "0 16px",
    },
  },
});

export const h1 = style({
  textAlign: "center",
});

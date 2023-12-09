import { globalStyle } from "@vanilla-extract/css";

globalStyle("html, body", {
  margin: 0,
});

globalStyle("*", {
  wordBreak: "keep-all",
  boxSizing: "border-box",
});

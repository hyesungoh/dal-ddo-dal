import { ComplexStyleRule } from "@vanilla-extract/css";

const SIZE_MAP = { "328": "328px" } as const;
type Size = keyof typeof SIZE_MAP;

export function mediaScreen(size: Size): string;

export function mediaScreen(size: number): string;

export function mediaScreen(size: Size | number) {
  if (typeof size === "number") {
    return `screen and (max-width: ${size}px)`;
  }

  return `screen and (max-width: ${SIZE_MAP[size]})`;
}

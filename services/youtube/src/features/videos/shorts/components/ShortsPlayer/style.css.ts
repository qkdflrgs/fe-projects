import { f } from "@/src/shared/styles/functions";
import { vars } from "@litae/themes";
import { style } from "@vanilla-extract/css";

export const wrapper = style([f.pRelative]);

export const videoWrapper = style([
  {
    aspectRatio: "1 / 1.776",
    backgroundColor: vars.colors.$static.light.color.black,
    width: "453px",
    height: "810px",
    cursor: "pointer",
    userSelect: "none",
  },
]);

export const video = style({ pointerEvents: "none" });

export const infoWrapper = style([
  f.pAbsolute,
  {
    bottom: "16px",
    left: "16px",
    zIndex: 2,
  },
]);

export const channelWrapper = style([
  f.flex,
  f.alignCenter,
  {
    marginBottom: "8px",
  },
]);

export const channelThumbnail = style({
  borderRadius: "50%",
});

export const channelName = style([
  f.truncate1,
  f.color.scale.gray[900],
  {
    paddingLeft: "8px",
    fontSize: "14px",
    lineHeight: "20px",
    fontWeight: 500,
  },
]);

export const title = style([
  f.truncate1,
  f.color.scale.gray[900],
  {
    fontSize: "14px",
    lineHeight: "20px",
    fontWeight: 400,
  },
]);

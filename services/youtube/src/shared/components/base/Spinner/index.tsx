import { assignInlineVars } from "@vanilla-extract/dynamic";
import * as s from "./style.css";
import { vars } from "@litae/themes";

type Props = {
  size?: number;
  color?: string;
};

export const Spinner = ({
  size = 24,
  color = vars.colors.$scale.gray[900],
}: Props) => (
  <div
    className={s.wrapper}
    style={{
      ...assignInlineVars({
        [s.sizeVar]: `${size}px`,
      }),
    }}
  >
    <div
      className={s.inner}
      style={{
        ...assignInlineVars({
          [s.innerBorderColorVar]: color,
        }),
      }}
    />
  </div>
);

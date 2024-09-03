"use client";

import * as s from "./style.css";
import { ReactNode } from "react";
import {
  useIntersectionObserver,
  UseIntersectionObserverProps,
} from "../../hooks/useIntersectionObserver";
import { Spinner } from "../base/Spinner";

type Props = {
  children?: ReactNode;
} & UseIntersectionObserverProps;

export const VisibilityLoader = ({
  children = <Spinner />,
  ...observerProps
}: Props) => {
  const { ref } = useIntersectionObserver(observerProps);

  return (
    <div ref={ref} className={s.wrapper}>
      <div>{children}</div>
    </div>
  );
};

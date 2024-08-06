import { useCallback } from "react";
import { AccordionButtonProps } from "./types";
import { useAccordionContext } from "./AccordionContext";
import { useButton } from "@litae/react-hooks-button";
import { clsx } from "clsx";
import { accordionButtonStyle } from "./style.css";
import * as React from "react";

const AccordionButton = (
  props: AccordionButtonProps,
  ref: React.Ref<HTMLButtonElement>,
) => {
  const { className, itemName = "", onClick, children, ...rest } = props;
  const { setActiveItem } = useAccordionContext();

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      setActiveItem(itemName);
      onClick?.(e);
    },
    [itemName, setActiveItem],
  );

  const { buttonProps } = useButton({
    ...rest,
    onClick: handleClick,
    elementType: "button",
  });

  return (
    <button
      {...buttonProps}
      ref={ref}
      className={clsx([accordionButtonStyle, className])}
    >
      {children}
    </button>
  );
};

const _AccordionButton = React.forwardRef(AccordionButton);

export { _AccordionButton as AccordionButton };

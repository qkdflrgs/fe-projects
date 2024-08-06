import { useCallback } from "react";
import { AccordionButtonProps } from "./types";
import { useAccordionContext } from "./AccordionContext";
import { useButton } from "@litae/react-hooks-button";
import { clsx } from "clsx";

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
    [itemName, setActiveItem, onClick],
  );

  const buttonProps = useButton({
    ...rest,
    onClick: handleClick,
    elementType: "button",
  });

  return (
    <button ref={ref} className={clsx([className])} {...buttonProps}>
      {children}
    </button>
  );
};

const _AccordionButton = AccordionButton;

export { _AccordionButton as AccordionButton };

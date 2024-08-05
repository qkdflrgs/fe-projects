import { OverloadedToggleButtonFunction } from "./types";
import { useToggle } from "@litae/react-hooks-toggle";
import { useButton } from "./useButton";

export const useToggleButton: OverloadedToggleButtonFunction = (
  props: any,
  isSelected?: boolean,
): any => {
  const { isSelected: _isSelected, toggle } = useToggle({
    isSelected,
  });

  const handleClick = (e: React.MouseEvent) => {
    console.log("hi");
    toggle();
    props?.onClick?.(e);
  };

  const { buttonProps } = useButton({
    ...props,
    onClick: handleClick,
  });

  return {
    buttonProps,
    isSelected: _isSelected,
  };
};

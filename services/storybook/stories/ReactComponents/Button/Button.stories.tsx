import "@litae/react-components-button/style.css";
import { vars } from "@litae/themes";
import { Button as _Button } from "@litae/react-components-button";
import { useButton } from "@litae/react-hooks-button";
import { Text } from "@litae/react-components-layout";
import React from "react";

export default {
  title: "React Components/Button",
  component: _Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["xs", "sm", "md", "lg"],
      control: "select",
    },
    color: {
      options: Object.keys(vars.colors.$scale),
      control: "select",
    },
    variant: {
      options: ["solid", "outline", "ghost"],
      control: "select",
    },
  },
};

export const Button = {
  args: {
    size: "md",
    variant: "outline",
    leftIcon: "🙂",
    children: "Button",
    isLoading: true,
    isDisabled: false,
  },
};

export const TextButton = {
  render: () => {
    const { buttonProps } = useButton({
      elementType: "div",
      onClick: () => {
        console.log("ttt");
      },
    });

    return (
      <Text
        {...buttonProps}
        as="div"
        fontSize="md"
        color="green"
        style={{
          userSelect: "none",
          cursor: "pointer",
        }}
      >
        텍스트 버튼입니다.
      </Text>
    );
  },
};

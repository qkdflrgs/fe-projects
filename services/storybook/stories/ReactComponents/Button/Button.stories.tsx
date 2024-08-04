import "@litae/react-components-button/style.css";
import { vars } from "@litae/themes";
import { Button as _Button } from "@litae/react-components-button";

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
    children: "Button",
  },
};

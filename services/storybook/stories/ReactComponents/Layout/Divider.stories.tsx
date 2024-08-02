import "@litae/react-components-layout/style.css";
import { Divider as _Divider } from "@litae/react-components-layout";
import { vars } from "@litae/themes";
import { StoryObj } from "@storybook/react";
import React from "react";

export default {
  title: "React Components/Layout/Divider",
  component: _Divider,
  decorators: [
    (Story) => (
      <div style={{ width: "300px", height: "300px", padding: "20px" }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      options: ["horizontal", "vertical"],
      control: "select",
    },
    variant: {
      options: ["solid", "dashed"],
      control: "select",
    },
    color: {
      options: Object.keys(vars.colors.$scale),
      control: "select",
    },
  },
};

type Story = StoryObj<typeof _Divider>;

export const Divider: Story = {
  args: {
    color: "gray",
    size: 1,
    variant: "solid",
    orientation: "horizontal",
  },
};

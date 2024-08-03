import "@litae/react-components-layout/style.css";
import { GridItem as _GridItem } from "@litae/react-components-layout";
import React from "react";

export default {
  title: "React Components/Layout/GridItem",
  component: _GridItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const GridItem = {
  args: {
    as: "div",
    padding: "5",
    background: "pink",
    borderRadius: "md",
    justify: "space-between",
    style: { width: "300px" },
  },
  render: (args) => (
    <_GridItem {...args}>
      <div>테스트</div>
      <div>입니다</div>
    </_GridItem>
  ),
};

import "@litae/react-components-layout/style.css";
import { Flex as _Flex } from "@litae/react-components-layout";
import React from "react";

export default {
  title: "React Components/Layout/Flex",
  component: _Flex,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Flex = {
  args: {
    as: "div",
    padding: "5",
    background: "pink",
    borderRadius: "md",
    justify: "space-between",
    style: { width: "300px" },
  },
  render: (args) => (
    <_Flex {...args}>
      <div>테스트</div>
      <div>입니다</div>
    </_Flex>
  ),
};

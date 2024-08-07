import React from "react";
import "@litae/react-components-input/style.css";
import {
  Input,
  InputGroup,
  InputLeftAddon,
} from "@litae/react-components-input";

export default {
  title: "React Components/Input",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const InputStory = {
  render: () => <Input placeholder="dd" />,
};

export const InputGroupStory = {
  render: () => (
    <InputGroup size="lg" color="green">
      <InputLeftAddon>$</InputLeftAddon>
      <Input placeholder="내용을 입력해주세요" />
    </InputGroup>
  ),
};

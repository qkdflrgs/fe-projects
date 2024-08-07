import React from "react";
import "@litae/react-components-select/style.css";
import { Select } from "@litae/react-components-select";

export default {
  title: "React Components/Select",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const SelectStory = {
  render: () => (
    <Select>
      <option value={1}>첫 번째 옵션</option>
      <option value={2}>두 번째 옵션</option>
    </Select>
  ),
};

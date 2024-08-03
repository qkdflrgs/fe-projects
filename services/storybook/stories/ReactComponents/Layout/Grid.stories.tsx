import "@litae/react-components-layout/style.css";
import { Grid as _Grid } from "@litae/react-components-layout";
import React from "react";

export default {
  title: "React Components/Layout/Grid",
  component: _Grid,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Grid = {
  args: {
    padding: "5",
    style: { width: "300px" },
  },
  render: (args) => (
    <_Grid {...args}>
      <div style={{ backgroundColor: "yellow" }}>테스트</div>
      <div style={{ backgroundColor: "yellow" }}>입니다</div>
    </_Grid>
  ),
};

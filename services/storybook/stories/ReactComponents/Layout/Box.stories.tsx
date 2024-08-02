import "@litae/react-components-layout/style.css";
import { Box as _Box } from "@litae/react-components-layout";

export default {
  title: "React Components/Layout/Box",
  component: _Box,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Box = {
  args: {
    as: "button",
    padding: "5",
    background: "blue",
    borderRadius: "none",
  },
};

import React from "react";
import "@litae/react-components-toast/style.css";
import { Button } from "@litae/react-components-button";
import { useToast, ToastProvider } from "@litae/react-components-toast";

export default {
  title: "React Components/Toast",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Example = () => {
  const { toast } = useToast();

  return (
    <Button
      onClick={() =>
        toast({
          payload: {
            message: "Hello, world!",
          },
        })
      }
    >
      Toast Button
    </Button>
  );
};

export const ToastStory = {
  render: () => (
    <ToastProvider>
      <Example />
    </ToastProvider>
  ),
};

import { Box, BoxProps } from "@litae/react-components-layout";

type Props = BoxProps;

export const DesktopFirstLayout = (props: Props) => {
  const { className, children, ...rest } = props;

  const currentClassName = ["min-h-full w-full relative", className].join(" ");

  return (
    <Box {...rest} className={currentClassName}>
      {children}
    </Box>
  );
};

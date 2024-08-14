import { Box, BoxProps } from "@litae/react-components-layout";

type Props = BoxProps;

export const DesktopFirstBody = (props: Props) => {
  const { className, padding = 2, children, ...rest } = props;

  const currentClassName = [
    "w-full min-h-screen relative top-0 pt-[56px]",
    className,
  ].join(" ");

  return (
    <Box {...rest} className={currentClassName} padding={padding}>
      {children}
    </Box>
  );
};

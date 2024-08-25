import { Box, BoxProps } from "@litae/react-components-layout";

type Props = BoxProps;

export const DesktopFirstSideNav = (props: Props) => {
  const { className, background = "gray", children, ...rest } = props;

  const currentClassName = ["w-[280px] z-10, className", className].join(" ");

  return (
    <Box {...rest} className={currentClassName} background={background}>
      {children}
    </Box>
  );
};

import { Flex, FlexProps } from "@litae/react-components-layout";

type Props = FlexProps;

export const DesktopFirstBody = (props: Props) => {
  const { className, padding = 2, children, ...rest } = props;

  const currentClassName = [
    "w-full min-h-screen relative top-0 pt-[56px]",
    className,
  ].join(" ");

  return (
    <Flex {...rest} className={currentClassName} padding={padding}>
      {children}
    </Flex>
  );
};

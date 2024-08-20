import { Flex, Heading, Text } from "@litae/react-components-layout";

const Error404Page = () => {
  <div className="w-screen h-screen flex justify-center">
    <Flex className="pt-[200px]" direction="column" align="center">
      <Heading fontSize="2xl">Not Found</Heading>
      <Text fontSize="lg">Please check url again or try again in a moment</Text>
    </Flex>
  </div>;
};

export default Error404Page;

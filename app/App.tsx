import { Flex } from '@chakra-ui/react';

export default function App() {
  return (
    <Flex
      direction="column"
      h="100vh"
      bg="gray.900"
      color="white"
      overflow="hidden"
    >
      {/* Main content area: sidebar + meters */}
      <Flex flex="1" overflow="hidden"></Flex>
    </Flex>
  );
}

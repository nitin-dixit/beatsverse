import { Box, Flex, Text } from "@chakra-ui/layout";

const PlayerBar = () => {
  return (
    <Box h="100px" w="100vw" bg="gray.900">
      <Flex align="center" justify-items="space-between">
        <Box padding="20px" color="white" w="30%">
          <Text fontSize="large" w="30%">
            Song Name
          </Text>
          <Text fontSize="sm">Artist Name</Text>
        </Box>
        <Box w="40%">controls</Box>
        <Box w="30%">other</Box>
      </Flex>
    </Box>
  );
};

export default PlayerBar;

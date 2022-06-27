import { Box, Flex, Text } from "@chakra-ui/layout";
import { useStoreState } from "easy-peasy";
import Player from "./player";

const PlayerBar = () => {
  const songs = useStoreState((state: any) => state.activeSongs);
  const activeSong = useStoreState((state: any) => state.activeSong);

  return (
    <Box h="90px" w="100vw" bg="#181818" padding="10px">
      <Flex align="center" justify-items="space-between">
        <Box padding="10px" color="white" w="30%">
          {activeSong ? (
            <>
              <Text fontSize="md" overflow="clip" textOverflow="ellipsis">
                {activeSong.name}
              </Text>
              <Text fontSize="sm">{activeSong.artist.name}</Text>
            </>
          ) : null}
        </Box>

        <Box w="40%">
          <Player songs={songs} activeSong={activeSong} />
        </Box>
        {/* <Box w="30%">other</Box> */}
      </Flex>
    </Box>
  );
};

export default PlayerBar;

import { Box, Flex, Text } from "@chakra-ui/layout";
import { useStore } from "../lib/store";
import Player from "./player";

const PlayerBar = () => {
  const songs = useStore((state: any) => state.activeSongs);
  const activeSong = useStore((state: any) => state.activeSong);

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
          {activeSong ? <Player songs={songs} activeSong={activeSong} /> : null}
        </Box>
        {/* <Box w="30%">other</Box> */}
      </Flex>
    </Box>
  );
};

export default PlayerBar;

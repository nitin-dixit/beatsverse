import { Box, Center } from "@chakra-ui/layout";
import { ButtonGroup, IconButton, Tooltip } from "@chakra-ui/react";
// import ReactHowler from "react-howler";
import {
  MdOutlinePauseCircleFilled,
  MdOutlinePlayCircleFilled,
  MdRepeat,
  MdShuffle,
  MdSkipNext,
  MdSkipPrevious,
} from "react-icons/md";

const Player = () => {
  return (
    <Box>
      <Box>{/* <ReactHowler /> */}</Box>
      <Center color="gray.600">
        <ButtonGroup>
          <Tooltip label="Enable Shuffle" openDelay={300}>
            <IconButton
              outline="none"
              variant="link"
              aria-label="shuffle"
              fontSize="24px"
              icon={<MdShuffle />}
              _hover={{ color: "white" }}
            />
          </Tooltip>

          <Tooltip label="Previous" openDelay={300}>
            <IconButton
              outline="none"
              variant="link"
              aria-label="skip previous"
              fontSize="24px"
              icon={<MdSkipPrevious />}
              _hover={{ color: "white" }}
            />
          </Tooltip>

          <Tooltip label="Play" openDelay={300}>
            <IconButton
              outline="none"
              variant="link"
              aria-label="play"
              fontSize="50px"
              color="white"
              icon={<MdOutlinePlayCircleFilled />}
            />
          </Tooltip>

          <Tooltip label="Pause" openDelay={300}>
            <IconButton
              outline="none"
              variant="link"
              aria-label="pause"
              fontSize="50px"
              color="white"
              icon={<MdOutlinePauseCircleFilled />}
            />
          </Tooltip>

          <Tooltip label="Next" openDelay={300}>
            <IconButton
              outline="none"
              variant="link"
              aria-label="skip next"
              fontSize="24px"
              icon={<MdSkipNext />}
              _hover={{ color: "white" }}
            />
          </Tooltip>

          <Tooltip label="Repeat" openDelay={300}>
            <IconButton
              outline="none"
              variant="link"
              aria-label="repeat"
              fontSize="24px"
              icon={<MdRepeat />}
              _hover={{ color: "white" }}
            />
          </Tooltip>
        </ButtonGroup>
      </Center>
    </Box>
  );
};

export default Player;

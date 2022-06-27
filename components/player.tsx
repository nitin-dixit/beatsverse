import { Box, Center, Flex, Text } from "@chakra-ui/layout";
import {
  ButtonGroup,
  IconButton,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Tooltip,
} from "@chakra-ui/react";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useState } from "react";
// import ReactHowler from "react-howler";
import {
  MdOutlinePauseCircleFilled,
  MdOutlinePlayCircleFilled,
  MdRepeat,
  MdShuffle,
  MdSkipNext,
  MdSkipPrevious,
} from "react-icons/md";

// eslint-disable-next-line no-unused-vars
const Player = ({ songs, activeSong }: any) => {
  const playing = useStoreState((state: any) => state.isPlaying);
  const setPlayState = useStoreActions(
    (state: any) => state.changeSongPlayingStatus
  );

  const handlePlaying = (isPlaying: boolean) => {
    setPlayState(isPlaying);
  };
  // const [index, setIndex] = useState(0);
  // const [seek, setSeek] = useState(0.0);
  const [repeat, setRepeat] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  // const [duration, setDuration] = useState(0.0);

  const onShuffle = () => {
    setShuffle((state) => !state);
  };

  const onRepeat = () => {
    setRepeat((state) => !state);
  };

  return (
    <Box>
      {/* <Box><ReactHowler playing={playing} src={activeSong?.url} /></Box> */}

      <Center color="gray.600" alignItems="center">
        <ButtonGroup>
          <Tooltip label="Enable Shuffle" openDelay={1000}>
            <IconButton
              outline="none"
              variant="link"
              aria-label="shuffle"
              fontSize="24px"
              icon={<MdShuffle />}
              _hover={{ color: "white" }}
              color={shuffle ? "white" : "gray.600"}
              onClick={onShuffle}
            />
          </Tooltip>

          <Tooltip label="Previous" openDelay={1000}>
            <IconButton
              outline="none"
              variant="link"
              aria-label="skip previous"
              fontSize="24px"
              icon={<MdSkipPrevious />}
              _hover={{ color: "white" }}
            />
          </Tooltip>

          {playing ? (
            <Tooltip label="Pause" openDelay={1000}>
              <IconButton
                outline="none"
                variant="link"
                aria-label="pause"
                fontSize="32px"
                color="white"
                icon={<MdOutlinePauseCircleFilled />}
                onClick={() => handlePlaying(false)}
              />
            </Tooltip>
          ) : (
            <Tooltip label="Play" openDelay={1000}>
              <IconButton
                outline="none"
                variant="link"
                aria-label="play"
                fontSize="32px"
                color="white"
                icon={<MdOutlinePlayCircleFilled />}
                onClick={() => handlePlaying(true)}
              />
            </Tooltip>
          )}

          <Tooltip label="Next" openDelay={1000}>
            <IconButton
              outline="none"
              variant="link"
              aria-label="skip next"
              fontSize="24px"
              icon={<MdSkipNext />}
              _hover={{ color: "white" }}
            />
          </Tooltip>

          <Tooltip label="Repeat" openDelay={1000}>
            <IconButton
              outline="none"
              variant="link"
              aria-label="repeat"
              fontSize="24px"
              icon={<MdRepeat />}
              _hover={{ color: "white" }}
              color={repeat ? "white" : "gray.600"}
              onClick={onRepeat}
            />
          </Tooltip>
        </ButtonGroup>
      </Center>

      <Box color="gray.600">
        <Flex justify="center" align="center">
          <Box w="10%" textAlign="left">
            <Text fontSize="xs">1:32</Text>
          </Box>
          <Box w="80%">
            <RangeSlider
              // eslint-disable-next-line jsx-a11y/aria-proptypes
              aria-label={["min", "max"]}
              step={0.1}
              min={0}
              max={321}
              id="player-range"
            >
              <RangeSliderTrack bg="gray.800">
                <RangeSliderFilledTrack bg="gray.600" />
              </RangeSliderTrack>
              <RangeSliderThumb index={0} />
            </RangeSlider>
          </Box>
          <Box w="10%" textAlign="right">
            <Text fontSize="xs">3:32</Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Player;

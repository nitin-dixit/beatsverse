import { Box } from "@chakra-ui/layout";
import React from "react";
import PlayerBar from "./playerBar";
import Sidebar from "./sidebar";

const playerLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box width="100vw" height="100vh">
      <Box position="absolute" top="0" width="250px" left="0">
        <Sidebar />
      </Box>
      <Box marginLeft="250px">
        <Box height="calc(100vh - 90px)">{children}</Box>
      </Box>
      <Box position="absolute" left="0" bottom="0" margin="0" padding="0">
        <PlayerBar />
      </Box>
    </Box>
  );
};

export default playerLayout;

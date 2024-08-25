import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
// import React from 'react'

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box height="400px" borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardContainer;

import React from "react";

import Intro from "./Intro";
import ShowSections from "./ShowSections";
import AppAbout from "./AppAbout";

import { Box } from "@mui/material";

const Home = () => {
  return (
    <Box
      component="main"
      sx={{
        marginY: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Intro />

      <AppAbout />

      <ShowSections />
    </Box>
  );
};

export default Home;

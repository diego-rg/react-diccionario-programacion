import React from "react";

import Intro from "./Intro";
import ShowSections from "./ShowSections";

import { Container } from "@mui/material";

const Home = () => {
  return (
    <Container
      component="main"
      sx={{
        marginY: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Intro />

      <ShowSections />
    </Container>
  );
};

export default Home;

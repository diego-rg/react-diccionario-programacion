import React from "react";

import { Box, Typography } from "@mui/material";

const Home = () => {
  return (
    <Box
      component="main"
      maxWidth="lg"
      sx={{
        padding: 2,
        marginTop: 2,
      }}
    >
      <Typography variant="body1" component="p">
        Home
      </Typography>
    </Box>
  );
};

export default Home;

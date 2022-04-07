import React from "react";

import { Box, Typography } from "@mui/material";

const Home = () => {
  return (
    <Box
      component="main"
      sx={{
        padding: 2,
      }}
    >
      <Typography variant="body1" component="p">
        Home
      </Typography>
    </Box>
  );
};

export default Home;

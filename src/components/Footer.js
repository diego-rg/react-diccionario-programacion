import React from "react";

import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: { xs: "#3a14ad", sm: "transparent" },
        padding: 2,
      }}
    >
      <Typography
        variant="body1"
        component="p"
        sx={{
          color: { xs: "white", sm: "black" },
          textAlign: "center",
        }}
      >
        &copy; 2022
        <Link
          sx={{
            textDecoration: "none",
            color: { xs: "white", sm: "black" },
            "&:hover": {
              color: { xs: "#ffab00", sm: "primary.main" },
            },
          }}
          href="https://github.com/diego-rg"
        >
          {" "}
          diego-rg
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;

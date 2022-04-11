import React from "react";

import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: { xs: "linear-gradient(360deg,#B2BEB5,#D5E3D9)", sm: "transparent" },
        padding: { xs: 2, sm: 4 },
      }}
    >
      <Typography
        variant="body1"
        component="p"
        sx={{
          color: { xs: "black", sm: "secondary.main" },
          textAlign: "center",
        }}
      >
        &copy; 2022
        <Link
          sx={{
            textDecoration: "none",
            color: { xs: "black", sm: "secondary.main" },
            "&:hover": {
              color: { xs: "black", sm: "primary.main" },
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

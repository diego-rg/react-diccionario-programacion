import React from "react";

import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        paddingY: 2,
        marginTop: "auto",
      }}
    >
      <Typography
        variant="body1"
        component="p"
        sx={{
          color: "secondary.main",
          textAlign: "center",
        }}
      >
        &copy; 2022
        <Link
          sx={{
            textDecoration: "none",
            color: "secondary.main",
            "&:hover": { color: "primary.main" },
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

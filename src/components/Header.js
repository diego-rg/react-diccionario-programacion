import React from "react";
import LinkNav from "./LinkNav";

import { AppBar, Toolbar, Container, Box } from "@mui/material";

//Header cuya navegación no usa router
const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{
        alignItems: "center",
        justifyContent: "space-between",
        background: "transparent",
        boxShadow: "none",
      }}
    >
      <Container maxWidth="md" disableGutters>
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <LinkNav href="/">Diego</LinkNav>
          <Box>
            <LinkNav href="/api">Api</LinkNav>
            <LinkNav href="/dictionary">Diccionario</LinkNav>
            <LinkNav href="/cheatsheet">Apuntes</LinkNav>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;

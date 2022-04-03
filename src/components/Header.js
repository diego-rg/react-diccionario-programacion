import React from "react";
import LinkNav from "./LinkNav";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <AppBar
        position="static"
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          background: "transparent",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <LinkNav href="/">Inicio</LinkNav>
          <LinkNav href="/api">Api</LinkNav>
          <LinkNav href="/dictionary">Diccionario</LinkNav>
          <LinkNav href="/cheatsheet">Apuntes</LinkNav>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;

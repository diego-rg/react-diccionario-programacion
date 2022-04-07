import React from "react";
import LinkNav from "./LinkNav";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{
        paddingY: {
          md: 4,
        },
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
  );
};

export default Header;

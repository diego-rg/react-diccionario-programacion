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
          xs: 2,
          sm: 4,
        },
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        background: { xs: "#B2BEB5", sm: "transparent" },
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{
          borderBottom: { xs: "none", sm: "1px solid #E2E5DE" },
        }}
      >
        <LinkNav href="/">Inicio</LinkNav>
        <LinkNav href="/api">Api</LinkNav>
        <LinkNav href="/dictionary">Diccionario</LinkNav>
        <LinkNav href="/cheatsheet">Apuntes</LinkNav>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

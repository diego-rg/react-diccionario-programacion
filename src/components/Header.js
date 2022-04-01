import React from "react";
import LinkNav from "./LinkNav";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";

const Header = () => {
  return (
    <Container maxWidth="sm" className="nav-container">
      <header>
        <nav>
          <AppBar
            position="static"
            style={{ background: "transparent", boxShadow: "none" }}
          >
            <Toolbar>
              <LinkNav href="/">Inicio</LinkNav>
              <LinkNav href="/api">Api</LinkNav>
              <LinkNav href="/dictionary">Diccionario</LinkNav>
              <LinkNav href="/cheatsheet">Crear apuntes</LinkNav>
            </Toolbar>
          </AppBar>
        </nav>
      </header>
    </Container>
  );
};

export default Header;

import React, { useState } from "react";
import LinkNav from "./LinkNav";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Toolbar, Container, Box, Menu, MenuItem } from "@mui/material";

//Header cuya navegación no usa router
const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        background: "transparent",
        boxShadow: "none",
      }}
    >
      <Container maxWidth="lg" disableGutters>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box
            className="logo-container"
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <LinkNav href="/">
              <Box
                component="img"
                src="/favicon-32x32.png"
                width="30px"
                alt="Logo del diccionario"
                sx={{ paddingTop: 1 }}
              ></Box>
            </LinkNav>
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="secondary"
              sx={{ paddingLeft: 0 }}
            >
              <MenuIcon sx={{ fontSize: "120%" }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <LinkNav href="/api">Api</LinkNav>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <LinkNav href="/dictionary">Diccionario</LinkNav>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <LinkNav href="/cheatsheet">Apuntes</LinkNav>
              </MenuItem>
            </Menu>
          </Box>

          <Box
            className="logo-container"
            sx={{
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
            }}
          >
            <LinkNav href="/">
              <Box
                component="img"
                src="/favicon-32x32.png"
                width="28px"
                alt="Logo del diccionario"
                sx={{ paddingTop: 1 }}
              ></Box>
            </LinkNav>
          </Box>
          <Box
            className="navbar-menu-md"
            sx={{ display: { xs: "none", md: "flex" } }}
          >
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

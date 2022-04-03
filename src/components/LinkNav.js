import React from "react";
import Link from "@mui/material/Link";
import "@fontsource/dancing-script";

const LinkNav = ({ className, href, children }) => {
  const onClick = (event) => {
    event.preventDefault(); //Evitar que recargue
    window.history.pushState({}, "", href); //Cambiar a url según o compoñente
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent); //Detectar que a url cambia
  };

  return (
    <Link
      sx={{
        fontFamily: "Dancing Script",
        fontSize: { xs: 18, md: 32 },
        m: { xs: 1, md: 3 },
        textDecoration: "none",
        color: { xs: "white", md: "black" },
        "&:hover": {
          color: "primary.main",
        },
      }}
      onClick={onClick}
      className={className}
      href={href}
    >
      {children}
    </Link>
  );
};

export default LinkNav;

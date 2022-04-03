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
        fontSize: { xs: 22, md: 32 },
        m: 2,
        textDecoration: "none",
        color: "black",
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

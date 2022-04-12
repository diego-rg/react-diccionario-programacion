import React from "react";

import Typography from "@mui/material/Link";

const LinkNav = ({ className, href, children }) => {
  const onClick = (event) => {
    event.preventDefault(); //Evitar que recargue
    window.history.pushState({}, "", href); //Cambiar la url según componente
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent); //Detectar que la url cambia
  };

  return (
    <Typography
      variant="h4"
      component="a"
      sx={{
        textDecoration: "none",
        color: { xs: "black", sm: "secondary.main" },
        "&:hover": {
          color: { xs: "secondary.main", sm: "primary.main" },
        },
      }}
      onClick={onClick}
      className={className}
      href={href}
    >
      {children}
    </Typography>
  );
};

export default LinkNav;

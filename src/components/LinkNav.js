import React from "react";

import Typography from "@mui/material/Link";

const LinkNav = ({ className, href, children }) => {
  const onClick = (event) => {
    event.preventDefault(); //Evitar que recargue
    window.history.pushState({}, "", href); //Cambiar a url según o compoñente
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent); //Detectar que a url cambia
  };

  return (
    <Typography
      variant="h4"
      component="a"
      sx={{
        m: { xs: 1, sm: 3 },
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

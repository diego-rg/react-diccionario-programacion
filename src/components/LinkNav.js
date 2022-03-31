import React from "react";
import Link from "@mui/material/Link";

const LinkNav = ({ className, href, children }) => {
  const onClick = (event) => {
    event.preventDefault(); //evitar que recargue
    window.history.pushState({}, "", href); //Cambiar a url según o compoñente
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent); //Detectan que a url cambia
  };

  return (
    <Link
      underline="none"
      color="white"
      onClick={onClick}
      className={className}
      href={href}
    >
      {children}
    </Link>
  );
};

export default LinkNav;

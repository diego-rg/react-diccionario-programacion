import React from "react";
import Link from "./Link";

const Header = () => {
  return (
    <div>
      <Link href="/">Inicio</Link>
      <Link href="/api">Api</Link>
      <Link href="/dictionary">Diccionario</Link>
      <Link href="/cheatsheet">Crear apuntes</Link>
    </div>
  );
};

export default Header;

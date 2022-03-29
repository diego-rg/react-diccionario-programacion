import React from "react";
import Link from "./Link";

const Header = () => {
  return (
    <header>
      <nav>
        <Link href="/">Inicio</Link>
        <Link href="/api">Api</Link>
        <Link href="/dictionary">Diccionario</Link>
        <Link href="/cheatsheet">Crear apuntes</Link>
      </nav>
    </header>
  );
};

export default Header;

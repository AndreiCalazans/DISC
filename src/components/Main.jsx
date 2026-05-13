import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function navClass({ isActive }) {
  return isActive ? "nav__link is-active" : "nav__link";
}

function Main() {
  return (
    <>
      <header className="top-bar">
        <div className="top-bar__inner">
          <NavLink to="/" className="brand" aria-label="DISC home">
            <span className="brand__mark" aria-hidden="true" />
            <span>DISC</span>
          </NavLink>
          <nav className="nav" aria-label="Principal">
            <NavLink to="/questions" className={navClass}>
              Teste
            </NavLink>
            <NavLink to="/disc" className={navClass}>
              Sobre o DISC
            </NavLink>
          </nav>
        </div>
      </header>
      <main className="page">
        <Outlet />
      </main>
    </>
  );
}

export default Main;

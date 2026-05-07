import React from "react";
import { Link, Outlet } from "react-router-dom";

function Main() {
  return (
    <div>
      <div className="top-bar">
        <ul>
          <li>
            <Link to="/">DISC</Link>
          </li>
          <li>
            <Link to="/questions">Teste</Link>
          </li>
          <li>
            <Link to="/disc">Sobre o DISC</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}

export default Main;

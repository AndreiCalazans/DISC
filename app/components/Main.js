import React from "react";
import { Link } from "react-router";
var Main = React.createClass({
  render: function() {
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
        {this.props.children}
      </div>
    );
  }
});

export default Main;

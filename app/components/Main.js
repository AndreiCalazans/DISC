import React from 'react';
import {Link} from 'react-router';
var Main = React.createClass({
  render: function() {
    return (
      <div>
        <div className="top-bar">
          <div className="top-bar-left ">
            <ul className='menu'>
              <li>
                <Link to='/'>DISC</Link>
              </li>
              <li>
                <Link to='/questions'>Teste</Link>
              </li>
              <li>
                <Link to='/disc'>Sobre o DISC</Link>
              </li>
            </ul>
          </div>
        </div>
        {this.props.children}
      </div>
    )
  }
});

export default Main;

import React from 'react';
import {Link} from 'react-router';
var Main = React.createClass({
  render: function() {
    return (
      <div>
        <Link to='/'>Home</Link>
        {this.props.children}
      </div>
    )
  }
});

export default Main;

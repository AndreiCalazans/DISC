import React from 'react';
import {Link} from 'react-router';
var Home = React.createClass({
  render: () => {
    return (
      <div className='row'>
        <div className="column small-centered medium-6 large-4">
          <h1 className='text-center'>DISC</h1>

          <h2 className='text-center'>Faça o DISC agora!</h2>

          <Link to="/questions">
          <button className="expanded button success large">Começe</button>
        </Link>
        </div>
      </div>
    )
  }
});

module.exports = Home;

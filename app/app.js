import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, browserHistory} from 'react-router';
import Main from 'Main';
import Home from 'Home';
import QuestionsMenu from 'QuestionsMenu';
import {Provider} from 'react-redux';
import Disc from 'Disc';

var store = require('./store/configureStore').configure();

//App css
require('app.scss');

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Home}></IndexRoute>
        <Route path='/questions' component={QuestionsMenu}></Route>
        <Route path='/disc' component={Disc}></Route>
      </Route>
    </Router>
</Provider>,
  document.getElementById('app')
);

import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, browserHistory} from 'react-router';
import Main from 'Main';
import Home from 'Home';
import QuestionsMenu from 'QuestionsMenu';
import {Provider} from 'react-redux';
import {someData} from './database/questionDb';
import Disc from 'Disc';

import * as actions from './actions/actions';
// var actions = require('./actions/actions');


var store = require('./store/configureStore').configure();

// things to do
// make actions and reducer to handle questionIndex for the page index
// make actions and reducer to handle the results



//Load foundations-sites
// require("foundation-sites/dist/css/foundation.min.css");
$(document).foundation();

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

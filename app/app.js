import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import Main from 'Main';
import Home from 'Home';
import QuestionsMenu from 'QuestionsMenu';
import {Provider} from 'react-redux';
import {someData} from './database/questionDb';


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
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Home}></IndexRoute>
        <Route path='/questions' component={QuestionsMenu}></Route>
      </Route>
    </Router>
</Provider>,
  document.getElementById('app')
);

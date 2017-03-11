import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import Main from 'Main';
import Home from 'Home';
import QuestionsMenu from 'QuestionsMenu';


//Load foundations-sites
// require("foundation-sites/dist/css/foundation.min.css");
$(document).foundation();

//App css
require('app.scss');


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path='/questions' component={QuestionsMenu}></Route>
    </Route>
  </Router>,
  document.getElementById('app')
);

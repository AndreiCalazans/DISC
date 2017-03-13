import React from 'react';
import {someData} from '../database/questionDb';

import Question from 'Question';
import Result from 'Result';

var QuestionMenu = React.createClass({
  render:function(){
    return (
      <div className="row">
        <div className="text-center column small-centered medium-10 large-8">
          <Question></Question>

        </div>
      </div>
    )
  }
});


export default QuestionMenu;

import React from 'react';
import {someData} from '../database/questionDb';

import Question from 'Question';
import Result from 'Result';

var QuestionMenu = React.createClass({
  getInitialState: function() {
    return {
      numberOfQuestion: 0
    }
  },
  setNextPage: function () {
    let preValue = this.state.numberOfQuestion;
    if (someData.length - 1 > preValue){
      this.setState({
        numberOfQuestion: preValue + 1
      })
    }
  },
  render:function(){
    return (
      <div className="row">
        <div className="text-center column small-centered medium-10 large-8">
          <Question questionIndex={this.state.numberOfQuestion} passNextPage={this.setNextPage}></Question>

        </div>
      </div>
    )
  }
});


export default QuestionMenu;

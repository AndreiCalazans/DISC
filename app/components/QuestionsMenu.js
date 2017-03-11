import React from 'react';
import {someData} from '../database/questionDb';

import Question from 'Question';

var QuestionMenu = React.createClass({
  getInitialState: function() {
    return {
      numberOfQuestion: 0
    }
  },
  handleNextPage: function() {
    let preValue = this.state.numberOfQuestion;
    if(preValue  < someData.length - 1){
      this.setState({
        numberOfQuestion: preValue + 1
      })
    }
  },
  render:function(){
    return (
      <div className="row">
        <div className="text-center column small-centered medium-10 large-8">
          <Question questionIndex={this.state.numberOfQuestion}></Question>
          <button className="button success expanded" onClick={this.handleNextPage}>Next</button>
        </div>
      </div>
    )
  }
});


export default QuestionMenu;

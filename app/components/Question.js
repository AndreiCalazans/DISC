import React from 'react';
import {someData} from '../database/questionDb';
import Answers from 'Answers';

var Question = React.createClass({
  render:function(){
    const questionRender = (questions) => {

    return (
        <div>
          <div>
          {questions[questionIndex].question}
        </div>
        <Answers questionIndex={questionIndex}></Answers>
        </div>
    )
    };
    var questionIndex  = this.props.questionIndex ;
    return (
      <div className="row">

          Question {questionIndex + 1}
          {questionRender(someData)}

      </div>
    )
  }
});


export default Question;

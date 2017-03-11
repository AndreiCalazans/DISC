import React from 'react';
import {someData} from '../database/questionDb';
import Answers from 'Answers';

var Question = React.createClass({
  render:function(){
    const questionRender = (questions) => {

    return (
        <div>
          <div className='questionContainer'>
            <div>
              <p>{questions[questionIndex].question}</p>
            </div>
            <div>
              <p>Agree</p>
              <p>Slightly agree</p>
              <p>slightly disagree</p>
              <p>disagree</p>
            </div>
        </div>

        <Answers questionIndex={questionIndex}></Answers>
        </div>
    )
    };
    var questionIndex  = this.props.questionIndex ;
    return (
      <div className="row">

        <p>Question {questionIndex + 1}</p>
          {questionRender(someData)}

      </div>
    )
  }
});


export default Question;

import React from 'react';
import {someData} from '../database/questionDb';
import Answers from 'Answers';

var Question = React.createClass({
  handleNextPage: function() {
    this.props.passNextPage();
  },
  render:function(){
    const questionRender = (questions) => {

    return (
        <div>
          <div className='questionContainer'>
            <div>
              <p>{questions[questionIndex].mainQuestion}</p>
            </div>
            <div>
              <p>raramente</p>
              <p>ocasionalmente</p>
              <p>Muitas vezes</p>
              <p>Maioria da vezes</p>
            </div>
        </div>

        <Answers questionIndex={questionIndex} handleNextPage={this.handleNextPage} questions={someData}></Answers>
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

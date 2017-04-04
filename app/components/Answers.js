import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import AnswerForm from 'answerForm';
import * as actions from '../actions/actions';
import {questions} from '../database/questionDb';

var dispatch ;
import Result from 'Result';




var Answer = React.createClass({
  handleValues: function (e) {
    e.preventDefault();
    var {dispatch , index } = this.props;

    var inputs = document.querySelectorAll('input:checked');
    this.computeResults(inputs , dispatch );

// this unchecks the previously checked inputs
    inputs.forEach((input) => {
      input.checked = false;
    });
    dispatch(actions.nextPage());
  },
  computeResults: function (inputs, dispatch) {
    inputs.forEach( (input) => {
      // add the value of the result of each selected input to the state
    dispatch(actions.addResult(input.name , input.value));
    });

  },
  render: function () {
    var {index} = this.props;
    var that = this
    function renderBody() {
      if(index === questions.length) {
        return <Result></Result>
      } else {
        return <AnswerForm handleValues={that.handleValues} ></AnswerForm>
      }
    };
    return (
      <div className="answer">
        <div id='progressBar'>
          {index+'/15'}
        </div>
        {renderBody()}
      </div>
    )
  }
});


export default connect(
  (state) => {
    return state;
  }
)(Answer);

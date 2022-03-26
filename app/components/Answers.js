import React from "react";
import { connect } from "react-redux";
import AnswerForm from "answerForm";
import Result from "Result";

import * as actions from "../actions/actions";
import { questions } from "../database/questionDb";

function checkForDuplicates(array) {
  return new Set(array).size !== array.length;
}

var Answer = React.createClass({
  handleValues: function(e) {
    e.preventDefault();
    var { dispatch } = this.props;

    var inputs = document.querySelectorAll("input:checked");


    inputs.forEach(input => {
      // add the value of the result of each selected input to the state
      console.log(input.name, input.value);
    });

    if (
      checkForDuplicates(
        Array.from(inputs.entries()).map((entry) => entry[1].value)
      )
    ) {
      alert(
        "Não é permitido selecionar a mesma frequência mais de uma vez por pergunta"
      );
      return;
    }

    this.computeResults(inputs, dispatch);

    // this unchecks the previously checked inputs
    inputs.forEach(input => {
      input.checked = false;
    });
    dispatch(actions.nextPage());
  },
  computeResults: function(inputs, dispatch) {
    inputs.forEach(input => {
      // add the value of the result of each selected input to the state
      console.log(input.name, input.value);
      dispatch(actions.addResult(input.name, input.value));
    });
  },
  render: function() {
    var { index } = this.props;
    var that = this;
    function renderBody() {
      if (index === questions.length) {
        return <Result />;
      } else {
        return <AnswerForm handleValues={that.handleValues} />;
      }
    }
    return <div className="answer">{renderBody()}</div>;
  }
});

export default connect(state => {
  return state;
})(Answer);

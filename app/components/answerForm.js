import React from "react";
import { connect } from "react-redux";
import { questions } from "../database/questionDb";

var AnswerForm = React.createClass({
  render() {
    var { index, handleValues } = this.props;

    const renderButton = () => {
      if (index === 14) {
        return <input type="submit" className="button" value="Resultado" />;
      } else {
        return (
          <input type="submit" className="button" value="Proxima questão" />
        );
      }
    };

    const inputRenderers = (name, questionIndex) => [
      <td>
        <p key={`title-${questionIndex}`}>
          {questions[index].subQuestions[questionIndex]}
        </p>
      </td>,
      ...[1, 2, 3, 4].map(each => (
        <label>
          <input
            key={name + each}
            required
            type="radio"
            name={name}
            value={each}
          />
        </label>
      ))
    ];

    const optionRender = () =>
      ["w", "x", "y", "z"].map((each, index) => (
        <tr key={each}>{inputRenderers(each, index)}</tr>
      ));

    return (
      <div>
        <form onSubmit={handleValues} className="answerContainer">
          <div className="questionContainer">
            <p>{questions[index].mainQuestion}</p>
          </div>
          <table className="question-table">
            <tbody>{optionRender()}</tbody>
          </table>
          <div className="legend centered">
            <p>Raramente</p>
            <p>Ocasionalmente</p>
            <p>Muitas vezes</p>
            <p>Maioria das vezes vezes</p>
          </div>
          <div className="buttonContainer">
            <b>{`${index + 1} - ${questions.length}`}</b>
            {renderButton()}
          </div>
        </form>
      </div>
    );
  }
});

export default connect(state => state)(AnswerForm);

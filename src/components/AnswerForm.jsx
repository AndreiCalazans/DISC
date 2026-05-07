import React from "react";
import { useSelector } from "react-redux";
import { questions } from "../database/questionDb.js";

function AnswerForm({ handleValues }) {
  const index = useSelector((state) => state.index);

  const renderButton = () => {
    if (index === 14) {
      return <input type="submit" className="button" value="Resultado" />;
    }
    return (
      <input type="submit" className="button" value="Proxima questão" />
    );
  };

  const inputRenderers = (name, questionIndex) => [
    <td key={`td-${questionIndex}`}>
      <p key={`title-${questionIndex}`}>
        {questions[index].subQuestions[questionIndex]}
      </p>
    </td>,
    ...[1, 2, 3, 4].map((each) => (
      <label key={`${name}-${each}`}>
        <input required type="radio" name={name} value={each} />
      </label>
    )),
  ];

  const optionRender = () =>
    ["w", "x", "y", "z"].map((each, idx) => (
      <tr key={each}>{inputRenderers(each, idx)}</tr>
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

export default AnswerForm;

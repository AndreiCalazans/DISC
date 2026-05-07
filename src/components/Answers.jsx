import React from "react";
import { useDispatch, useSelector } from "react-redux";

import AnswerForm from "./AnswerForm.jsx";
import Result from "./Result.jsx";
import { questions } from "../database/questionDb.js";
import { nextPage, addResult } from "../store/configureStore.js";

function checkForDuplicates(array) {
  return new Set(array).size !== array.length;
}

function Answers() {
  const dispatch = useDispatch();
  const index = useSelector((state) => state.index);

  const handleValues = (e) => {
    e.preventDefault();

    const inputs = document.querySelectorAll("input:checked");

    inputs.forEach((input) => {
      // log selection
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

    inputs.forEach((input) => {
      console.log(input.name, input.value);
      dispatch(addResult({ letter: input.name, value: input.value }));
    });

    // uncheck previously checked inputs
    inputs.forEach((input) => {
      input.checked = false;
    });

    dispatch(nextPage());
  };

  return (
    <div className="answer">
      {index === questions.length ? (
        <Result />
      ) : (
        <AnswerForm handleValues={handleValues} />
      )}
    </div>
  );
}

export default Answers;

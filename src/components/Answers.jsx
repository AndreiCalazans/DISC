import React from "react";
import { useDispatch, useSelector } from "react-redux";

import AnswerForm from "./AnswerForm.jsx";
import Result from "./Result.jsx";
import { questions } from "../database/questionDb.js";
import { nextPage, addResult } from "../store/configureStore.js";

function Answers() {
  const dispatch = useDispatch();
  const index = useSelector((state) => state.index);

  const handleComplete = (selections) => {
    Object.entries(selections).forEach(([letter, value]) => {
      dispatch(addResult({ letter, value }));
    });
    dispatch(nextPage());
  };

  if (index === questions.length) {
    return <Result />;
  }

  // key={index} forces a fresh mount per question so internal selection state resets.
  return <AnswerForm key={index} onComplete={handleComplete} />;
}

export default Answers;

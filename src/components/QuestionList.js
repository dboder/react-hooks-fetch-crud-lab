import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({currQuestionList}) {

  const [questions, setQuestions] = useState([]);
  const [modifiedItem, setModifiedItem] = useState(-1);
  // GET 
  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((r) => r.json())
      .then((items) => setQuestions(items));
  }, [currQuestionList, modifiedItem]);


  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map((question) => (
          <QuestionItem key={question.id} question={question} onChangedItem={setModifiedItem}/>
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;

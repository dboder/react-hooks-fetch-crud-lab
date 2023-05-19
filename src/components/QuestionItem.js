import React from "react";

function QuestionItem({ question, onChangedItem}) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));
  //DELETE
  function handleQuestionDelete(event) {
    fetch(`http://localhost:4000/questions/${id}`, {
    method: "DELETE",
  })
    .then((r) => r.json())
    .then(() => console.log("deleted!"));  
  onChangedItem(id);
  }
  //PATCH
  function handleQuestionUpdate(event) {
    console.log( event.target.value)
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({correctIndex: Number(event.target.value)})
    })
    .then((r) => r.json())
    .then(() => console.log("Updated!"));  
    onChangedItem(id);
  }
  

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleQuestionUpdate}>{options}</select>
      </label>
      <button onClick={handleQuestionDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;

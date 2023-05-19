import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questionList, setQuestionList] = useState(false);

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm isQuestionCreated={setQuestionList}/> : <QuestionList currQuestionList={questionList} />}
    </main>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import Question from "./component/Question";

function App() {
  const [questions, setQuestions] = useState([]);
  const [nickname, setNickname] = useState("");
  const [questionText, setQuestionText] = useState("");

  const handleName = (e) => setNickname(e.target.value);
  const handleQuestion = (e) => setQuestionText (e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuestions([...questions,{nickname:nickname, question: questionText}])
  }

  return (
    <>
      {questions.map((question,index) => (
       <Question key={index} nickname={question.nickname} question={question.question} />
       ))}

      <form className="form" onSubmit={handleSubmit}>
        <label>
          Nickname:
          <input
            type="text"
            name="nickname"
            id="name"
            placeholder="Enter your nickname"
            onChange={handleName}
          />
        </label>
        <br />
        <label>
          Question:
          <br />
          <textarea value={questionText} onChange={handleQuestion}/>
        </label>
        <br />
        <input type="submit" id="submit" />
      </form>
    </>
  );
}

export default App;

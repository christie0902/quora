import Answer from "./Answer.jsx";

const Question = (props) => {
  return (
    <div className='questionContainer'>
      <h3 className="nickname">{props.nickname}</h3>
      <p className="questionDisplay">{props.question}</p>
      <Answer />
    </div>
  );
};

export default Question;
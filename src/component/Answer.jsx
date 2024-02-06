import Likes from "./Likes.jsx";
import { useState } from "react";

const Answer = (props) => {
  const [comment, setComment] = useState("");
  const [submittedComments, setSubmittedComments] = useState([]);

  const handleComment = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //remove space from input
    if (comment.trim() !== "") {
      setSubmittedComments([...submittedComments, comment]);
      setComment("");
    }
  };

  return (
    <>
      {submittedComments.map((submittedComment, index) => (
        <>
          <p key={index} className="answer">
            <strong>Answer:</strong> {submittedComment}
          </p>
          <Likes />
        </>
      ))}
      <form className ='commentContainer' onSubmit={handleSubmit}>
        <label>
          Comment:
          <input type="text" value={comment} onChange={handleComment} />
        </label>
        <br />
        <input className="button" type="submit" value="Submit" />
      </form>
    </>
  );
};

export default Answer;
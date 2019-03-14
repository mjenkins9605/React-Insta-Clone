import React from 'react';
import "./CommentSection.css";

function CommentInput (props) {
  return (
    <form>
      <input className="comment-input" type="text" placeholder="Add comment... " />
    </form>
  );
};

export default CommentInput;
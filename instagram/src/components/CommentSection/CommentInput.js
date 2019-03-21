import React from "react";
import "./CommentSection.css";

const CommentInput = props => {

    return (
      <div>
        <form onSubmit={props.formSubmitHandler}>
          <input
            type="text"
            name="comment"
            onChange={props.inputChangeHandler}
            placeholder="Add a comment..."
          />
          <button type="submit">Post</button>
        </form>
      </div>
    );
  }


export default CommentInput;

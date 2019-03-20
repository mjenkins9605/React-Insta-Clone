import React from "react";
import "./CommentSection.css";


class CommentInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      comment: ""
    };
  }

  

  render() {
    return (
      <div>
        <form onSubmit={this.props.formSubmitHandler}>
          <input
            type="text"
            name="comment"
            value={this.value}
            onChange={this.props.inputChangeHandler}
            placeholder="Add a comment..."
          />
          <button type="submit">Post</button>
        </form>
      </div>
    );
  }
}

export default CommentInput;

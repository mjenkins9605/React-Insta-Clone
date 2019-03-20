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

  inputChangeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  formSubmitHandler = event => {
    event.preventDefault();
    let newComment = {
      username: "Anonymous",
      text: this.state.comment
    };

    console.log("state.comments are: ",this.state.comments);
    let comments = this.state.comments.slice();
    comments.push(newComment);
    this.setState({
      comments,
      comment: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.formSubmitHandler}>
          <input
            type="text"
            name="comment"
            value={this.value}
            onChange={this.inputChangeHandler}
            placeholder="Add a comment..."
          />
          <button type="submit">Post</button>
        </form>
      </div>
    );
  }
}

export default CommentInput;

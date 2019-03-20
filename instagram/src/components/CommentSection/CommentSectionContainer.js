import React from "react";

import Comment from "./Comment";
import CommentInput from "./CommentInput";
import PropTypes from 'prop-types';

class CommentSectionContainer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        comments: props.comments,
        comment: '',
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
        <div className="comment-section">
            <div className="heart-comment">
                <p className="heart"><i class="far fa-heart"></i></p>
                <p className="commentImg"><i class="far fa-comment"></i></p>
            </div>
            <p>373 likes</p>
            {this.state.comments.map((comment, input) => <Comment key={input} comment={comment} />)}
          <CommentInput 
            inputChangeHandler={this.inputChangeHandler} 
            formSubmitHandler={this.formSubmitHandler}
          />
        </div>
      );
    }
  }
  
  CommentSectionContainer.propTypes = {
    comments: PropTypes.arrayOf(
      PropTypes.shape({ 
          text: PropTypes.string, 
          username: PropTypes.string 
        })
    )
  };
  
  export default CommentSectionContainer;
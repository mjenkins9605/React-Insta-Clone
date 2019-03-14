import React from "react";

import Comment from "./Comment";
import CommentInput from "./CommentInput";
import PropTypes from 'prop-types';

class CommentSectionContainer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        comments: props.comments
      };
    }
    render() {
      return (
        <div className="comment-section">
            <div className="heart-comment">
                <p className="heart"><i class="far fa-heart"></i></p>
                <p className="commentImg"><i class="far fa-comment"></i></p>
            </div>
            <p>373 likes</p>
          {this.state.comments.map((comment, input) => <Comment key={input} comment={comment} />)}
          <CommentInput />
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
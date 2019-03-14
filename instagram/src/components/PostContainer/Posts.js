import React from "react";

import "./PostContainer.css";
import PropTypes from 'prop-types';
import PostHeader from "./PostHeader";
import CommentSectionContainer from "../CommentSection/CommentSectionContainer";

function Post (props) {
    return (
      <div className="post-border">
        <PostHeader
          username={props.post.username}
          thumbnailUrl={props.post.thumbnailUrl}
        />
        <div className="post-img">
          <img
            alt="post thumbnail"
            className="post-image"
            src={props.post.imageUrl}
          />
        </div>
        <CommentSectionContainer comments={props.post.comments} />
      </div>
    );
  };
  
  export default Post;
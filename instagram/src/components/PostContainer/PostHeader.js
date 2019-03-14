import React from 'react';

import "./PostContainer.css";

function PostHeader (props) {
  return (
    <div className="post-header">
      <div className="post-thumb-wrapper">
        <img
          alt="post header"
          className="post-thumb"
          src={props.thumbnailUrl}
        />
      </div>
      <div className="post-username">{props.username}</div>
    </div>
  );
};

export default PostHeader;
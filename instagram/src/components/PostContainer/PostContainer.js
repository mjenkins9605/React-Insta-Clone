import React from "react";

import Post from "./Posts";
import "./PostContainer.css";

function PostsContainer (props) {
    return (
      <div className="posts-container">
        {props.posts.map(
            p => <Post key={p.imageUrl} post={p} />
            )}
      </div>
    );
  };
  
  export default PostsContainer;
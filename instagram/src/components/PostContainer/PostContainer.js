import React from "react";

import Post from "./Posts";

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
import React from "react";

import Post from "./Posts";
// import "./PostContainer.css";
import styled from 'styled-components';

function PostsContainer (props) {
    return (
      <PostsContainerDiv>
        {props.posts.map(
            p => <Post key={p.imageUrl} post={p} />
            )}
      </PostsContainerDiv>
    );
  };

  const PostsContainerDiv = styled.div
    `
      width: 600px;
      height: auto;
      margin: 5px auto;
    `
  export default PostsContainer;
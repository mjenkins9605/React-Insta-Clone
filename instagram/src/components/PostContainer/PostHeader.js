import React from "react";

import "./PostContainer.css";
import styled from "styled-components";

function PostHeader(props) {
  return (
    <PostHeader1>
      <PostThumb
        img alt="post header" src={props.thumbnailUrl} />
      
      <PostUsername>
        {props.username}
      </PostUsername>
    </PostHeader1>
  );
}

const PostHeader1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 60px;
  padding-left: 16px;
`;
const PostUsername = styled.div`
  padding-left: 8px;
`;
const PostThumb = styled.img`
    width: 32px;
    height: auto;
    border-radius: 50%;
`;
export default PostHeader;

import React from "react";

import "./PostContainer.css";
import PropTypes from 'prop-types';
import PostHeader from "./PostHeader";
import CommentSectionContainer from "../CommentSection/CommentSectionContainer";
import styled from "styled-components";

function Post (props) {
    return (
      <PostBorder>
        <PostHeader
          username={props.post.username}
          thumbnailUrl={props.post.thumbnailUrl}
        />
        <div className="post-img">
          <PostImg img alt="post thumbnail" src={props.post.imageUrl} />
        </div>
        <CommentSectionContainer comments={props.post.comments} />
      </PostBorder>
    );
  };

  const PostBorder = styled.div
  `
    border: 1px solid black;
    margin-bottom: 20px;  
  `
  const PostImg = styled.img
  `
    width: 100%;
    height: auto;  
  `

  export default Post;
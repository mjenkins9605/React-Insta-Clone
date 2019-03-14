import React from "react";

import Comment from "./Comment";

function CommentSectionContainer (props) {
    return (
        <div className="comments">
            {props.comments.map((comment, index) => <Comment comment={comment} key={index} />)}
        </div>
    );
}

export default CommentSectionContainer;
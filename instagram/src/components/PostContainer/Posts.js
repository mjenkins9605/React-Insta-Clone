import React from "react";

function Posts (props) {
    return (
        <div>
            <img className="mainImage" alt="postImage" src={props.post.imageUrl} />
        </div>
    );
}

export default Posts;
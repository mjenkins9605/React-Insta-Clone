import React from "react";

import Posts from "./Posts";
import CommentSectionContainer from "./CommentSectionContainer";

function PostContainer (props) {
    return( 
        <div>    
            {props.dataProps.map(point => 
                <div key ={point.timestamp}> 
                    <img src={point.imageUrl} alt={point.timestamp}/>
                    <CommentSectionContainer 
                        comments={point.comments} />
                </div>
            )} 
        </div>)
}

export default PostContainer;
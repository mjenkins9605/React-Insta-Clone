import react from "react";
import PropTypes from 'prop-types';

function Comments (props) {
    return (
        <div className="usernameComment">
           {props.username} 
        
            {props.text}
        </div>
    );
}

export default Comments;
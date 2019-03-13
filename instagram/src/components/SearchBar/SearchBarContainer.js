import React from "react";

import SearchBar from "./SearchBar.css";
import instagramBanner from "./instagramBanner";

function SearchBarContainer (props) {
    return (
        <div>
            <p><i class="fab fa-instagram"></i></p>
            <p>|</p>
            <instagramBanner />
            <p></p>
            <p></p>
            <p></p>
            <p></p>
        </div>
    );
}

export default SearchBarContainer;
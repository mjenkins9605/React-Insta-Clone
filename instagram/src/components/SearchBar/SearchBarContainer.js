import React from "react";

import SearchBar from "./SearchBar.css";
import instagramBanner from "./instagramBanner";

function SearchBarContainer (props) {
    return (
        <div className="searchBar">
            <p><i class="fab fa-instagram"></i></p>
            <p>|</p>
            <instagramBanner />

            <input type="text" value="Search" />
            <div className="rightIcons">
                <p><i class="far fa-compass"></i></p>
                <p><i class="far fa-heart"></i></p>
                <p><i class="far fa-user"></i></p>
            </div>
        </div>
    );
}

export default SearchBarContainer;
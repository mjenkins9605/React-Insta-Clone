import React from "react";

import SearchBar from "./SearchBar.css";
import instagramBanner from "./instagramBanner.jpg";

function SearchBarContainer (props) {
    return (
        <div className="searchBar">
            <div className="leftIcons">
                <p><i class="fab fa-instagram"></i></p>
                <p>|</p>
            </div>

            <img className="banner" src={instagramBanner} />

            <form>
                <input type="text" value="Search" />
            </form>
            <div className="rightIcons">
                <p><i class="far fa-compass"></i></p>
                <p><i class="far fa-heart"></i></p>
                <p><i class="far fa-user"></i></p>
            </div>
        </div>
    );
}

export default SearchBarContainer;
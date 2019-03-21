import React from "react";

import "./SearchBar.css";
import instagramBanner from "./instagramBanner.jpg";

function SearchBarContainer(props) {
  return (
    <div className="searchBar">
      <div className="leftIcons">
        <p className="camera">
          <i class="fab fa-instagram" />
        </p>
        <p>|</p>
      </div>

      <img className="banner" src={instagramBanner} />

      <form>
        <input 
            type="text" 
            placeholder="Search" 
            onKeyDown={props.searchPosts} 
        />
      </form>

      <div className="rightIcons">
        <p>
          <i class="far fa-compass" />
        </p>
        <p>
          <i class="far fa-heart" />
        </p>
        <p>
          <i class="far fa-user" />
        </p>
      </div>
    </div>
  );
}

export default SearchBarContainer;

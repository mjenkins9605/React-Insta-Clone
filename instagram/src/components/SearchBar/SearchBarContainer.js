import React from "react";

// import "./SearchBar.css";
import instagramBanner from "./instagramBanner.jpg";
import styled from 'styled-components';

function SearchBarContainer(props) {
  return (
    <SearchBarCss>
      <LeftIcons>
        <p className="camera">
          <i class="fab fa-instagram" />
        </p>
        <p>|</p>
      </LeftIcons>

      <Banner img src={instagramBanner} />

      
        <SearchForm input 
            type="text" 
            placeholder="Search" 
            onKeyDown={props.searchPosts} 
        />
      
      <RightIcons>
        <p>
          <i class="far fa-compass" />
        </p>
        <p>
          <i class="far fa-heart" />
        </p>
        <p>
          <i class="far fa-user" />
        </p>
      </RightIcons>
    </SearchBarCss>
  );
}

const SearchBarCss = styled.div
  `
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    font-size: 40px;  
  `

const LeftIcons = styled.div
  `
    display: flex;
    flex-direction: row;  
    margin-top: 20px
    p {
      margin-right: 30px;
    }
  `

const RightIcons = styled.div
  `
    display: flex;
    flex-direction: row;
    margin-top: 20px
      p {
        margin-left: 30px;
      }
  `
const Banner = styled.img
  `
    width: 15%;
    height: 15%;
    margin-top: 35px;
    padding-right: 30px;
  `

const SearchForm = styled.input
  `
    width: 250px;
    height: 30px;
    font-size: 16px; 
    text-align: center;
    margin-top: 40px;
    border-radius: 5px;
  `



export default SearchBarContainer;

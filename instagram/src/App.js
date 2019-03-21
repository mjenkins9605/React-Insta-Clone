import React, { Component } from "react";
import "./App.css";

import dummyData from "./dummy-data";
import SearchBarContainer from "./components/SearchBar/SearchBarContainer";
import PostContainer from "./components/PostContainer/PostContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      search: "",
      addNewComment: "",
      filterPost: []
    };
  }

componentDidMount() {
  this.setState({
    posts: dummyData
  });
}

searchPostsHandler = event => {
  const posts = this.state.posts.filter(p => {
    if (p.username.includes(event.target.value)) {
      return p;
    }
  });
  this.setState({filterPost: posts});
};




  render() {
    return (
      <div className="App">
        <SearchBarContainer 
          searchTerm={this.state.searchTerm}
          searchPosts={this.searchPostsHandler}
        />
        <PostContainer 
          posts={
            this.state.filterPost.length > 0
              ? this.state.filterPost
              : this.state.posts
          }/>
      </div>
    );
  }
}

export default App;
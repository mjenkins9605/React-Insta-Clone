import React from "react";
import styled from 'styled-components';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleLoginSubmit = event => {
    const user = this.state.username;
    localStorage.setItem("user", user);
    window.location.reload();
  };

  render() {
    return (
      <div className="loginForm">
        <h2>Login to Enter</h2>
        <div>
          <UsernameInput input
            
            type="text"
            placeholder="User Name"
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <PasswordInput input
            className="passwordInput"
            type="password"
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <div>
            <button className="loginButton" onClick={this.handleLoginSubmit}>Log In</button>
          </div>
        </div>
      </div>
    );
  }
}


const UsernameInput = styled.input
`
width: 500px;
height: 50px;
  background: lightgrey;
  border-radius: 6px;
  margin: 10px auto;
  padding: 10px 25px;
`;
const PasswordInput = styled.input
`
width: 500px;
height: 50px;
  background: lightgrey;
  border-radius: 6px;
  margin: 10px auto;
  padding: 10px 25px;
`;


export default Login;

import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import axios from "axios";
import { login, logout } from "../LocalStorage";
import { Row, Input, Icon } from "react-materialize";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: "",
      username: "",
      password: ""
    };
  }
  render() {
    const handleSubmit = async () => {
      const res = await axios.post("/api/login", {
        username: this.state.username.toLowerCase().trim(),
        password: this.state.password
      });

      if (!res.data.exist) {
        this.setState({
          error: (
            <h3 style={{ color: "red" }}>
              wrong username or password, please try again.
            </h3>
          )
        });
        localStorage.removeItem("token");
      }
      if (res.data.exist) {
        login(res.data.user._id);
        this.props.login(res.data.user);

        this.setState({
          error: <Redirect to="/games" />
        });
      }
    };

    const handleChange = event => {
      this.setState({ [event.target.name]: event.target.value });
    };

    const style = { textAlign: "center" };
    return (
      <div className="container">
        <div className="container">
          <div className="container">
            <div className="login container">
              <h1 style={{ textAlign: "center" }}>Login now!</h1>

              <Row>
                <Input
                  s={12}
                  label="Username"
                  onChange={handleChange}
                  name="username"
                  value={this.state.username}
                >
                  <Icon>account_circle</Icon>
                </Input>
                <Input
                  type="password"
                  label="password"
                  s={12}
                  onChange={handleChange}
                  name="password"
                  value={this.state.password}
                >
                  <Icon>dialpad</Icon>
                </Input>
              </Row>
              <button onClick={handleSubmit} className="btn blue">
                Log in
              </button>
              {this.state.error}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(Login);

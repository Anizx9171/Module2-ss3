import React, { Component } from "react";

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  getValueOnChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value,
    });
  };

  submitForm = (e) => {
    e.preventDefault();
    const userL = {
      email: this.state.email,
      password: this.state.password,
    };
    console.log(userL);
  };
  render() {
    return (
      <>
        <form onSubmit={(e) => this.submitForm(e)}>
          <div className="form-group">
            <label htmlFor="login-email">Email:</label>
            <input
              onChange={this.getValueOnChange}
              type="email"
              id="login-email"
              name="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="login-password">Mật khẩu:</label>
            <input
              onChange={this.getValueOnChange}
              type="password"
              id="login-password"
              name="password"
            />
          </div>
          <div className="form-group">
            <button type="submit">Đăng ký</button>
          </div>
        </form>
      </>
    );
  }
}

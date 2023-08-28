import React, { Component } from "react";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }
  getValueOnChange = () => {};
  render() {
    return (
      <>
        <form id="signup-form" action="#" method="post">
          <div className="form-group">
            <label htmlFor="signup-name">Họ và tên:</label>
            <input
              onChange={this.getValueOnChange}
              type="text"
              id="signup-name"
              name="name"
              required=""
            />
          </div>
          <div className="form-group">
            <label htmlFor="signup-email">Email:</label>
            <input
              onChange={this.getValueOnChange}
              type="email"
              id="signup-email"
              name="email"
              required=""
            />
          </div>
          <div className="form-group">
            <label htmlFor="signup-password">Mật khẩu:</label>
            <input
              onChange={this.getValueOnChange}
              type="password"
              id="signup-password"
              name="password"
              required=""
            />
          </div>
          <div className="form-group">
            <p>{this.state.waning}</p>
            <button type="submit">Đăng ký</button>
          </div>
        </form>
      </>
    );
  }
}

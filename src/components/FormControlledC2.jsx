import React, { Component } from "react";

export default class FormControlledC2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      dateOfBirth: "",
      email: "",
      password: "",
    };
  }
  handleChange = (e) => {
    // console.log(e);
    const value = e.target.value;
    const name = e.target.name;
    // console.log("name,value", name, value);
    //cập nhật lại state
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    // Ngan chan su ien submit cua form
    e.preventDefault();
    // console.log("Hamf submit ddax chayj", e);
    //tao doi tuong
    const newUser = {
      userName: this.state.userName,
      dateOfBirth: this.state.dateOfBirth,
      email: this.state.email,
      password: this.state.password,
    };
    console.log(newUser);
  };

  render() {
    return (
      <>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              UserName
            </label>
            <input
              name="userName"
              onChange={this.handleChange}
              className="form-control"
              id="username"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="dateOfBirth" className="form-label">
              DateOfBirth
            </label>
            <input
              name="dateOfBirth"
              onChange={this.handleChange}
              type="date"
              className="form-control"
              id="dateOfBirth"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              name="email"
              onChange={this.handleChange}
              type="text"
              className="form-control"
              id="email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              name="password"
              onChange={this.handleChange}
              type="password"
              className="form-control"
              id="password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </>
    );
  }
}

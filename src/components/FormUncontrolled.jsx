import React, { Component } from "react";

export default class FormUncontrolled extends Component {
  constructor(props) {
    super(props);

    this.userName = React.createRef();
    this.dateOfBirth = React.createRef();
    this.email = React.createRef();
    this.password = React.createRef();
  }
  handleSubmit = (e) => {
    // Ngan chan su ien submit cua form
    e.preventDefault();
    // console.log("Hamf submit ddax chayj", e);
    //tao doi tuong
    const newUser = {
      userName: this.userName.current.value,
      dateOfBirth: this.dateOfBirth.current.value,
      email: this.email.current.value,
      password: this.password.current.value,
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
              ref={this.userName}
              name="userName"
              className="form-control"
              id="username"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="dateOfBirth" className="form-label">
              DateOfBirth
            </label>
            <input
              ref={this.dateOfBirth}
              name="dateOfBirth"
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
              ref={this.email}
              name="email"
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
              ref={this.password}
              name="password"
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

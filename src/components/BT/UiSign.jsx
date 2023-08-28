import React, { Component } from "react";

export default class UiSign extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  getValue = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    // console.log(value, name);
    this.setState({
      [name]: value,
    });
  };
  submitFunction = (e) => {
    e.preventDefault();
    const newUser = {
      email: this.state.email,
      password: this.state.password,
    };
    // console.log(newUser);
    // e.reset();
  };
  render() {
    return (
      <>
        <div>
          <form onSubmit={(e) => this.submitFunction(e)}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                name="email"
                onInput={this.getValue}
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                onInput={this.getValue}
                name="password"
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </>
    );
  }
}

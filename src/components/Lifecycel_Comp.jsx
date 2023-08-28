import React, { Component } from "react";

export default class Lifecycel_Comp extends Component {
  constructor(props) {
    super(props);
    console.log("component đc khởi tạo");
    this.state = {
      className: "JV-230630",
    };
  }
  componentWillMount() {
    console.log("component Will Mount");
  }
  componentDidMount() {
    console.log("component Did Mount");
  }
  componentWillReceiveProps(newprops) {
    console.log("giá trị vừa dc thay đổi:", newprops);
  }
  shouldComponentUpdate() {
    return true;
  }
  componentWillUpdate() {
    console.log("component ưill update đc chạy");
  }
  componentDidUpdate() {
    console.log("component did update đc gọi");
  }
  componentWillUnmount() {
    console.log("component Will Unmount");
  }
  render() {
    console.log("component được render");
    return (
      <>
        <h4>Tên cong ty: {this.props.company}</h4>
        <h3>Tên lớp: {this.state.className}</h3>
        <button
          onClick={() =>
            this.setState({
              className: "JVAR",
            })
          }
        >
          Change State
        </button>
      </>
    );
  }
}

import { Component, useState } from "react";
import "./App.css";
import Lifecycel_Comp from "./components/Lifecycel_Comp";
import FormControlledC1 from "./components/FormControlledC1";
import FormControlledC2 from "./components/FormControlledc2";
import FormUncontrolled from "./components/FormUncontrolled";
import UiSign from "./components/BT/UiSign";
import SignIn from "./components/BT/signin-signup/SignIn";
import SignUp from "./components/BT/signin-signup/SignUp";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // show: false,
      // company: "rikkei Âcdemy",
      //   showF: false,
      showSI: true,
    };
  }
  chanegeUi = () => {
    this.setState({
      showSI: !this.state.showSI,
    });
  };
  // showLifecycel = () => {
  //   this.setState({
  //     show: !this.state.show,
  //   });
  // };
  // changePropsByClick = () => {
  //   this.setState({
  //     company: "ádsadsadsadsadsa",
  //   });
  // };
  // showFormByClick = () => {
  //   this.setState({
  //     showF: !this.state.showF,
  //   });
  // };
  render() {
    return (
      <>
        {/* <button onClick={this.showLifecycel}>
          <h1>App</h1>
        </button>
        <button onClick={this.changePropsByClick}>changeProps</button>
        {this.state.show ? (
          <Lifecycel_Comp company={this.state.company} />
        ) : (
          <></>
        )} */}
        {/* <button onClick={this.showFormByClick}>Show Form</button> */}
        {/* {this.state.showF ? <FormControlledC1 /> : <></>} */}
        {/* {this.state.showF ? <FormUncontrolled /> : <></>} */}
        {/* <UiSign /> */}
        <button onClick={() => this.chanegeUi()}>Sign In - Sign Up</button>
        {this.state.showSI ? <SignIn /> : <SignUp />}
      </>
    );
  }
}
export default App;

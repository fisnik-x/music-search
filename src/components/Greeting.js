/**
 * A greeting component, that based on time of the day
 * greets the user. E.g. 'Good morning, Alexa'.
 *
 * @file components/Greeting.js
 * @author Jerry
 * @copyright 2020 Jerry
 */

import React, { Component } from "react";

export default class Greeting extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "Jerry",
      message: "",
      time: new Date().getHours()
    };
  }

  componentDidMount = () => {
    this.greet();
  }

  greet = () => {
    let t = this.state.time;
    if (t < 12 && t > 4) {
      this.setState({ message: "Good morning, "});
    }
    else if (t === 12) {
      this.setState({ message: "Noon, "});
    }
    else if (t < 17 && t > 12) {
      this.setState({ message: "Good afternoon, "});
    }
    else {
      this.setState({ message: "Good evening, "});
    }
  };

  render() {
    return (<h2>{this.state.message + this.state.name}</h2>);
  }
}
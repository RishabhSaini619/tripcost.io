import React, { Component } from "react";
import backgroundImage from  "/home/flam/VSCode/tripcost.io/public/world_bg.webp";
import "./AppBG.css";

export class AppBG extends Component {
  render() {
    return (
        <img src={backgroundImage} className="AppBG" alt="logo" />
    );
  }
}

export default AppBG;

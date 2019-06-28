import React, { Component } from "react";
import errorimage from "./images/404.jpg";
var altmsg = "404 Image Not Found";
class Errorcomponent extends Component {
  render() {
    return (
      <div className="col-lg-8 col-xs-8">
        <center>
          <img src={errorimage} alt={altmsg} height="50%" width="75%" />
          <h3 className="text-danger">{this.props.msg}</h3>
        </center>
      </div>
    );
  }
}

export default Errorcomponent;

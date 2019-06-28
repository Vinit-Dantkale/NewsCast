import React, { Component } from "react";
import Sideoptions from "./Sideoptions";
import Sideoptions2 from "./Sideoptions2";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      q: ""
    };
  }
  sayhello(select, param, temp) {
    this.props.triggerParentUpdate(select, param, temp);
  }

  submitval() {
    this.props.triggerParentUpdate("headlines", "q", this.state.q);
  }

  getval = e => {
    var temp = e.target.value.replace(/ /g, "+");
    this.setState(function(state, props) {
      return {
        q: temp
      };
    });
  };

  render() {
    return (
      <div>
        <nav
          className="navbar fixed-top navbar-expand-md navbar-dark"
          style={{ backgroundColor: "#38284B" }}
        >
          <button
            type="button"
            className="btn sidenavbut"
            data-toggle="modal"
            data-target="#myModal"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <a className="navbar-brand" href="#">
            NewsCast
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="dropdown-toggle" />
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href=""
                  onClick={() => this.sayhello("headlines")}
                >
                  Feed
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  Pinned-Articles
                </a>
              </li>
            </ul>
            <div className="navbar-form navbar-center">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  name="search"
                  onChange={e => this.getval(e)}
                />
                <button
                  className="btn"
                  type="button"
                  onClick={this.submitval.bind(this)}
                  style={{ backgroundColor: "white" }}
                >
                  <i className="fa fa-search" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </nav>
        <div className="modal" id="myModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
              </div>

              <div className="modal-body">
                <Sideoptions triggerParentUpdate={this.sayhello.bind(this)} />
                <br />
                <Sideoptions2 triggerParentUpdate={this.sayhello.bind(this)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;

import React, { Component } from "react";
import list from "./lists.json";
var lists = list.sources;
var tempurl = [];
class Sideoptions2 extends Component {
  selectedsource(event) {
    if (event.target.checked === true) {
      tempurl.push(event.target.value);
    } else {
      for (var x in tempurl) {
        if (tempurl[x] === event.target.value) {
          tempurl.splice(x, 1);
        }
      }
    }
    var u = "";
    for (x = tempurl.length - 1; x >= 0; x--) {
      if (u !== "") {
        u += "," + tempurl[x];
      } else {
        u = tempurl[x];
      }
    }
    this.props.triggerParentUpdate("headlines", "sources", u);
  }
  render() {
    return (
      <div className="sticky-top">
        <div className="card">
          <h4 className="card-header list-group-item-warning">Sources</h4>
          <div className="card-body">
            <ul className="halfheight2 container-fluid">
              {lists.map((sources, i) => (
                <span key={i}>
                  <input
                    type="checkbox"
                    name="source"
                    onChange={this.selectedsource.bind(this)}
                    value={sources.id}
                    id={sources.name}
                  />
                  <label htmlFor={sources.name}>{sources.name}</label>
                  <hr />
                </span>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Sideoptions2;

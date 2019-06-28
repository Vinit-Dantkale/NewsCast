import React, { Component } from "react";
import list from "./lists.json";
var lists = list;

class Sideoptions extends Component {
  selectedcountry(event) {
    this.props.triggerParentUpdate("headlines", "country", event.target);
  }
  selectedcategory(event) {
    this.props.triggerParentUpdate("headlines", "category", event.target);
  }

  render() {
    return (
      <div className="sticky-top">
        <div className="card">
          <h4 className="card-header list-group-item-success">Country</h4>
          <div className="card-body">
            <ul className="halfheight container-fluid">
              {lists.countries.map((countrycode, i) => (
                <span key={i}>
                  <input
                    type="radio"
                    name="country"
                    onChange={this.selectedcountry.bind(this)}
                    value={countrycode.lettercode}
                    id={countrycode.name}
                  />
                  <label htmlFor={countrycode.name}>{countrycode.name}</label>
                  <hr />
                </span>
              ))}
            </ul>
          </div>
        </div>
        <br />
        <div className="card">
          <h4 className="card-header list-group-item-info">Category</h4>
          <div className="card-body">
            <ul className="secondcard container-fluid">
              {lists.categories.map((info, i) => (
                <span key={i}>
                  <input
                    type="radio"
                    name="category"
                    onChange={this.selectedcategory.bind(this)}
                    value={info.lettercode}
                    id={info.name}
                  />
                  <label htmlFor={info.name}>{info.name}</label>
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

export default Sideoptions;

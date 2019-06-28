import React, { Component } from "react";
class Currentsearch extends Component {
  render() {
    return (
      <div className="col-lg-12 col-xs-12">
        <h3 className="card-header list-group-item-danger">
          <b>Your Current Search:</b>
        </h3>
        <div className="card-body">
          <table className="col-lg-4 col-xs-4 ">
            <thead>
              <tr>
                <th colSpan="2">Top-Headlines</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Country: </td>
                <td>{this.props.url.thcountry}</td>
              </tr>
              <tr>
                <td>Category: </td>
                <td>{this.props.url.thcategory}</td>
              </tr>
              <tr>
                <td>sources: </td>
                <td>{this.props.url.thsources}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Currentsearch;

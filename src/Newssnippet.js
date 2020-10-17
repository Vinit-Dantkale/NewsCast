import React from "react";
let imgtitle = {
  backgroundColor: "rgba(255, 255, 255, 0.5)",
  display: "block"
};
let imgtitlenone = {
  backgroundColor: "rgba(255, 255, 255, 0.5)",
  display: "none"
};
class Newssnippet extends React.Component {
  constructor() {
    super();
    this.state = { hover: false };
  }

  constructDate(dateUTC) {
    let date=new Date(dateUTC)
    return `${date.toDateString()} - ${date.toLocaleTimeString()}` 
  }

  mousehover() {
    this.setState({ hover: !this.state.hover });
  }

  render() {
    let divstyle = {
      border: "2px",
      borderRadius: "5px"
    };
    return (
      <div style={divstyle}>
        <div className="card">
          <div className={this.props.headfoot.header}>
            <b className="float-left">Source : {this.props.source.name}</b>
            <button
              style={{ margin: "0px", padding: "0px" }}
              className="btn btn-link float-right text-white"
              onClick={e => this.selectedsnippet()}
            >
              <i className="material-icons">link</i>
            </button>
          </div>
          <div className="card-body container-fluid">
            <div className="card img-fluid">
              <img
                className="card-img-top"
                src={
                  this.props.urlToImage === null ? "" : this.props.urlToImage
                }
                alt={"Title : " + this.props.title}
              />
              <div
                className="card-img-overlay h-100 d-flex flex-column justify-content-end"
                onMouseOver={this.mousehover.bind(this)}
                onMouseOut={this.mousehover.bind(this)}
              >
                <h4
                  className="card-title imgtitle"
                  style={this.state.hover === true ? imgtitle : imgtitlenone}
                >
                  <b>{this.props.urlToImage == null ? "" : this.props.title}</b>
                </h4>
              </div>
            </div>
            <hr />
            <b> Description :</b> {this.props.description}
            <br />
            <b>Content :</b> {this.props.content}
          </div>
          <div className={this.props.headfoot.header}>
            <a href={this.props.url} className="float-left text-white">
              Full Article
            </a>
            <span className="float-center text-white">{
              this.constructDate(this.props.date)
            }</span>
            <span className="float-right text-white">
              <b> Author : </b>
              {this.props.author}
            </span>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default Newssnippet;

import React, { Component } from "react";
import Newssnippet from "./Newssnippet";
import Errorcomponent from "./Errorcomponent";
var bgtypes = {
  0: {
    header: "card-header bg-primary text-white",
    footer: "card-footer bg-primary"
  },
  1: {
    header: "card-header bg-success text-white",
    footer: "card-footer bg-success"
  },
  2: {
    header: "card-header bg-info text-white",
    footer: "card-footer bg-info"
  },
  3: {
    header: "card-header bg-warning text-white",
    footer: "card-footer bg-warning"
  },
  4: {
    header: "card-header bg-danger text-white",
    footer: "card-footer bg-danger"
  },
  5: {
    header: "card-header bg-secondary text-white",
    footer: "card-footer bg-secondary"
  },
  6: {
    header: "card-header bg-dark text-white",
    footer: "card-footer bg-dark"
  }
};

class Snippetcolumns extends Component {
  render() {
    var data = this.props.data;
    var available = this.props.available;
    var error = this.props.error;
    var iserror = this.props.iserror;
    //console.log(this.props);
    //No Connection or Sever Not Found
    if (iserror) {
      return (
        <Errorcomponent
          msg={"No Connection or 404:Server Not Found. " + error}
          image={"404"}
        />
      );
    } else if (!available) {
      //Available but takes time to load
      return (
        <h3 className="text-warning col-lg-8 col-xs-8">
          Loading.... Refresh if it takes long
        </h3>
      );
    } else if (data.status === "error") {
      return <Errorcomponent 
        msg={data.code} 
        image={"404"}/>;
    } else if (data.status === "ok" && data.totalResults === 0) {
      return <Errorcomponent 
        msg={"Total Results : " + data.totalResults} 
        image={"noresults"}/>;
    }

    return (
      <div className="col-lg-8 col-xs-8">
        {data.articles.map((info, i) => (
          <Newssnippet
            key={i}
            indexno={i}
            headfoot={bgtypes[i % 7]}
            source={info.source}
            title={info.title}
            urlToImage={info.urlToImage}
            description={info.description}
            content={info.content}
            url={info.url}
            author={info.author}
            date={info.publishedAt}
          />
        ))}
      </div>
    );
  }
}

export default Snippetcolumns;

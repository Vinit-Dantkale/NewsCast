import React, { Component } from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import Snippetcolumns from "./Snippetcolumns";
import Sideoptions from "./Sideoptions";
import Currentsearch from "./Currentsearch";
import Sideoptions2 from "./Sideoptions2";

var url;
var choice = false;
var pagecol;

class App extends Component {
  constructor() {
    super();
    this.state = {
      selected: "headlines",
      headlines: {
        prefix: "https://newsapi.org/v2/top-headlines?",
        country: "in",
        category: "general",
        sources: "",
        q: "",
        pageSize: 20,
        page: 1
      },
      currentsearch: {
        thcountry: "India",
        thcategory: "General",
        thsources: "",
        atcategory: "",
        atfrom: "",
        atto: "",
        atpreference: "Popularity",
        scountry: "India",
        slanguage: "English"
      },
      available: false,
      data: {},
      error: "",
      iserror: false
    };
  }

  getdata(temp) {
    url = this.buildUrl(this.state, temp);
    //console.log(url);
    fetch(url)
      .then(response => response.json())
      .then(json => {
        this.setState(function(state, props) {
          return {
            data: json,
            available: true
          };
        });
      })
      .catch(error => {
        this.setState(function(state, props) {
          return { error: error, iserror: true };
        });
      });
  }

  sayhello(select, param, temp) {
    this.setState(
      function(state, props) {
        //Use function while updating state as direct update can lead to asynchronous update
        if (param === "country") {
          choice = false;
          return {
            selected: select,
            headlines: {
              ...state.headlines,
              q: "",
              country: temp.value,
              page: 1
            },
            currentsearch: { ...state.currentsearch, thcountry: temp.id }
          };
        }
        if (param === "category") {
          choice = false;
          return {
            selected: select,
            headlines: {
              ...state.headlines,
              q: "",
              category: temp.value,
              page: 1
            },
            currentsearch: { ...state.currentsearch, thcategory: temp.id }
          };
        }
        if (param === "sources") {
          choice = true;
          return {
            selected: "headlines",
            headlines: { ...state.headlines, q: "", sources: temp, page: 1 },
            currentsearch: { ...state.currentsearch, thsources: temp }
          };
        }
        if (param === "q") {
          return {
            selected: select,
            headlines: { ...state.headlines, q: temp, page: 1 }
          };
        }
        if (param === "page") {
          return {
            headlines: { ...state.headlines, page: temp }
          };
        }
      },
      function() {
        if (choice === true) {
          this.getdata("sourcesonly");
        } else {
          this.getdata("");
        }
      }
    );
  }

  buildUrl = (temp, cond) => {
    let url = "";
    url = temp.headlines["prefix"];
    if (cond === "sourcesonly") {
      url += "sources=" + temp.headlines["sources"];
    } else {
      url +=
        "country=" +
        temp.headlines["country"] +
        "&category=" +
        temp.headlines["category"];
    }

    url +=
      "&q=" +
      temp.headlines["q"] +
      "&page=" +
      temp.headlines["page"] +
      "&apiKey=c1888f19eed343cdb78edaa6274585f0";

    return url;
  };

  componentWillMount() {
    this.getdata();
  }

  render() {
    pagecol = (
      <ul className="pagination justify-content-center col-lg-12 col-xs-12">
        <li>
          <button
            className="btn btn-link"
            onClick={() =>
              this.sayhello(
                this.state.selected,
                "page",
                this.state.headlines.page - 1
              )
            }
            disabled={
              this.state.data.totalResults / 20 <= 1 ||
              this.state.headlines.page - 1 === 0
            }
          >
            Previous
          </button>
        </li>
        <li>
          <button
            className="btn btn-link"
            onClick={() =>
              this.sayhello(
                this.state.selected,
                "page",
                this.state.headlines.page + 1
              )
            }
            disabled={
              this.state.data.totalResults / 20 <= 1 ||
              this.state.headlines.page * 20 > this.state.data.totalResults
            }
          >
            Next
          </button>
        </li>
      </ul>
    );

    //if we execute this.function onClick of a button then
    //here "this" refers to whatever is executing that function
    //and not to the class and if its a button executing that
    //function.So to make sure it refers to class we have to bind it
    //this.func.bind(this)
    return (
      <center>
        <div className="row">
          <Navbar triggerParentUpdate={this.sayhello.bind(this)} />
          <div className="col-lg-2 col-xs-2 sideopt1">
            <Sideoptions triggerParentUpdate={this.sayhello.bind(this)} />
          </div>
          <Snippetcolumns
            data={this.state.data}
            available={this.state.available}
            iserror={this.state.iserror}
            error={this.state.error}
          />
          <div className="col-lg-2 col-xs-2 sideopt2">
            <Sideoptions2 triggerParentUpdate={this.sayhello.bind(this)} />
          </div>
          {pagecol}
          <Currentsearch url={this.state.currentsearch} />
        </div>
      </center>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

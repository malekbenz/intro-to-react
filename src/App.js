import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";
import Landing from "./Landing";
import Search from "./Search";
import Details from "./Details";
import preload from "./data.json";

var FourOhFour = () => <h1>404</h1>;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/Search" component={Search} />
            <Route
              path="/details/:id"
              component={props => {
                const selectedShow = preload.shows.find(
                  x => x.imdbID === props.match.params.id
                );
                return <Details show={selectedShow} {...props} />;
              }}
            />
            <Route component={FourOhFour} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

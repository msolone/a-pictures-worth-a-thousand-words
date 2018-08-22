import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; 
import Nav from "./Components/Nav.js";
import CategoryList from "./Components/CategoryList";
import PhotoList from "./Components/PhotoList";
import PhotoDetail from "./Components/PhotoDetail";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Nav />
          </header>
          <section className="body">
            <Switch>
              <Route path="/" exact component={CategoryList} />
              <Route path="/Components/PhotoList" exact component={PhotoList} />
              <Route path="/Components/PhotoDetail" exact component={PhotoDetail} />
            </Switch>
          </section>
        </div>
      </Router>
    );
  }
}

export default App;

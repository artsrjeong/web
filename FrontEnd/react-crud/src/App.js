import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddTutorial from "./components/add-tutorial.component";
import Tutorial from "./components/tutorial.component";
import TutorialsList from "./components/tutorials-list.component";
import TableTest from "./components/table-test.component";
import Scroll from "./components/scroll.component";
import OptionTest from "./components/optiontest.component";
import TreeTest from "./components/tree-test.component";
import Table2 from "./components/Table2";


class App extends Component {
  render() {
    const message='hello debugger!'
    console.log(message)
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/tutorials"} className="navbar-brand">
            bezKoder
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/tutorials"} className="nav-link">
                Tutorials
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/tableTest"} className="nav-link">
                TableTest
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/scroll"} className="nav-link">
                Scroll
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/optiontest"} className="nav-link">
                OptionTest
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/treetest"} className="nav-link">
                TreeTest
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/Table2"} className="nav-link">
                TableInTable
              </Link>
            </li>
          </div>
        </nav>

        <div className="container no-gutters">
          <Switch>
            <Route exact path={["/", "/tutorials"]} component={TutorialsList} />
            <Route exact path="/add" component={AddTutorial} />
            <Route path="/tutorials/:id" component={Tutorial} />
            <Route exact path="/tableTest" component={TableTest} />
            <Route exact path="/scroll" component={Scroll} />
            <Route exact path="/optiontest" component={OptionTest} />
            <Route exact path="/treetest" component={TreeTest} />
            <Route exact path="/Table2" component={Table2} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;

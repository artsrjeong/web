import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";
import { Link } from "react-router-dom";

export default class TreeTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1,
      searchTitle: ""
    };
  }

  componentDidMount() {
  }


  render() {
    const { searchTitle, tutorials, currentTutorial, currentIndex } = this.state;

    return (
      <div className="row">
        <div className="col-md-2">
        <ul>
        <li>one1one1one1one1one1one1one1one1one1</li>
        <li>one2</li>
        </ul>
        </div>
        <div className="col-md-10">
        <ul>
        <li>main</li>
        <li>main</li>
        </ul>
        </div>
      </div>
    );
  }
}

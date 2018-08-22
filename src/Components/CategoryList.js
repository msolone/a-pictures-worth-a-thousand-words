import React, { Component } from "react";
import { Link } from "react-router-dom";
import Data from "./Data.json";

class CategoryList extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      list: []
    };
  }

  componentDidMount() {
    this.setState({
      list: Data
    });
    console.log(Data);
  }

  render() {
    return (
      <ul className="home-page-ul">
        {Object.values(this.state.list).map((hobby, i) => {
          console.log(hobby.photos[0].imageURL);
          return (
            <li key={i}>
            <div className='description-box'>
              <Link to="Panda Component">
                <h1>{hobby.title}</h1>
              </Link>
              <p>{hobby.description}</p>
            </div>
              <img src={hobby.photos[0].imageURL} alt={hobby.title} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default CategoryList;

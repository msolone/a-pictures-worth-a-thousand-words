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
  }

  render() {
    return (
      <ul className="home-page-ul">
        {Object.keys(this.state.list).map((key, i) => {
            const hobby = this.state.list[key]
          console.log(key);
          return (
            <li key={i}>
            <div className='description-box'>
              <Link to={`./${key}`}>
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

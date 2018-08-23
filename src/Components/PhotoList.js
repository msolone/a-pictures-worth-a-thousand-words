import React, { Component } from "react";
import Data from "./Data.json";
import { Link } from "react-router-dom";

class PhotoList extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      about: {
          photos:[]
      }
    };
  }

  componentDidMount() {
    this.setState({
      about: Data[this.props.match.params.category]
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className="about-page">
        <h2>{this.state.about.title}</h2>
        <p>{this.state.about.description}</p>
        <section className="about">
          {this.state.about.photos.map((photo, i) => {
            return (
              <Link to={`./${this.props.match.params.category}/${i}`} key={i}>
                <img
                  src={photo.imageURL}
                  alt={photo.title}
                  className="about-photo"
                />
                <p>{photo.title}</p>
              </Link>
            );
          })}
        </section>
      </div>
    );
  }
}

export default PhotoList;

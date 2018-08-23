import React, { Component } from "react";
import Data from "./Data.json";
import { Link } from "react-router-dom";

class PhotoList extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      about: {
        title: "",
        description: "",
        photos: [],
        imageURL: ""
      }
    };
  }

  componentDidMount() {
    this.setState({
      about: Data[this.props.match.params.category]
    });
  
  }

  render() {
    console.log(this.state.about);
    return (
      <div className='about-page'>
        <h2>{this.state.about.title}</h2>
        <p>{this.state.about.description}</p>
        <section className="about">
          <Link to={`./${this.state}`}>
            <img
              className="about-images"
              src={
                this.state.about.photos[0] &&
                this.state.about.photos[0].imageURL
              }
              alt={
                this.state &&
                this.state.about &&
                this.state.about.photos &&
                this.state.about.photos[0] &&
                this.state.about.photos[0].title
              }
            />
            <p>
              {this.state &&
                this.state.about &&
                this.state.about.photos &&
                this.state.about.photos[0] &&
                this.state.about.photos[0].title}
            </p>
          </Link>

          <Link to="pandas">
            <img
              className="about-images"
              src={
                this.state.about.photos[1] &&
                this.state.about.photos[1].imageURL
              }
              alt={
                this.state &&
                this.state.about &&
                this.state.about.photos &&
                this.state.about.photos[1] &&
                this.state.about.photos[1].title
              }
            />
            <p>
              {this.state &&
                this.state.about &&
                this.state.about.photos &&
                this.state.about.photos[1] &&
                this.state.about.photos[1].title}
            </p>
          </Link>
        </section>
      </div>
    );
  }
}

export default PhotoList;

import React, { Component } from "react";
import Data from "./Data.json";

class PhotoDetail extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      about: {
        photos: [],
      }
    };
  }

  componentDidMount() {
    this.setState({
      about: Data[this.props.match.params.category],
    //   id: [this.props.match.params.id]
    });
    console.log(this.props.match.params.category);
    console.log(this.props.match.params.id);
  }

  render() {
    return (
      <div className="photo-detail">
        <h2>
          {
            Data[this.props.match.params.category].photos[
              this.props.match.params.id
            ].title
          }
        </h2>
        <img
          className="final-image"
          src={
            Data[this.props.match.params.category].photos[
              this.props.match.params.id
            ].imageURL
          }
          alt={
            Data[this.props.match.params.category].photos[
              this.props.match.params.id
            ].title
          }
        />

        <p>
          <a
            href={
              Data[this.props.match.params.category].photos[
                this.props.match.params.id
              ].sourceURL
            }
          >
            source
          </a>
        </p>
      </div>
    );
  }
}

export default PhotoDetail;

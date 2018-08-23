import React, { Component } from "react";
import Data from "./Data.json";
import { Link } from "react-router-dom";

class PhotoList extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      about: {
 
      }
    };
  }


  render() {
      console.log(this)
    return (
      <div className='about-page'>
        <h2>{Data[this.props.match.params.category].title}</h2>
        <p>{Data[this.props.match.params.category].description}</p>
        <section className="about">
        {Data[this.props.match.params.category].photos.map((photo, i) => {
            return (
                <Link to={`./${this.props.match.params.category}/${i}`} key={i}>
                <img src={photo.imageURL} alt={photo.title} className='about-photo' />
                <p>{photo.title}</p>
                </Link>
            )
        })}

        </section>
            
    </div>
    )
    
  }
}

export default PhotoList;

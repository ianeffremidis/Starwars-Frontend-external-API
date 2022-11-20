import React, {useState, useEffect} from "react";
import axios from "axios";

export const Cards = (props) => {
 

  return (
    <div>
      <div className="card" style={{width: "18rem"}}>
        <img src="https://www.raworths.co.uk/wp-content/uploads/2015/10/placeholder.jpg" className="card-img-top" alt="placeholderimage" />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">
           Gender: {props.gender}
          </p>
          <p className="card-text">
           Eye Color: {props.eye_color}
          </p>
          <p className="card-text">
           Hair Color: {props.hair_color}
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

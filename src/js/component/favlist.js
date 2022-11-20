import React, {useState, useEffect} from "react";
import axios from "axios";

export const Favlist = (props) => {

  return (
    <div>
        <ul class="list-group">
          <button onclick={props.data}></button> 
        </ul> 
    </div>
  );
};

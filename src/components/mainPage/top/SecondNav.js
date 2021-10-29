import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SecondNav.css";
import cardimg from "./Cardimg";
import ShowCards from "./ShowCards";

function callimg(data){
    return (
        <ShowCards 
        id={data.id}
        imgsrc={data.img}
        name={data.name}
        />
    )
}

function SecondNav() {
  return (
    <div>
      
        {cardimg.map(callimg)}
    </div>
  );
}

export default SecondNav;

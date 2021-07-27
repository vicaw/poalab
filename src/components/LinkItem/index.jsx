import React, { useState, useEffect } from "react";
import { Link } from "./style";

const LinkItem = (props) => {
  return (
    <Link href={props.link} title={props.name}>
      <div className="LinkImage">
        <img src={props.img} alt={props.name} />
      </div>
      <div className="LinkName">
        <h3>{props.name}</h3>
      </div>
    </Link>
  );
};

export default LinkItem;

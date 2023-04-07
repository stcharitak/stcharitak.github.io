import React from "react";

export default function Button(props) {
  return (
    <a href={props.url} target={props.target} className="btn btn-primary">
      {props.text}
    </a>
  );
}

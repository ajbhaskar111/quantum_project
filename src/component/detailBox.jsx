import React from "react";

export default function detailBox(props) {
  return <p className={`details-text ${props.className}`}>{props.details}</p>;
}

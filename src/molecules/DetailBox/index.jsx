import React from "react";

export const DetailBox = (props) => {
  return <p className={`details-text ${props.className}`} style={props?.style}>{props.details}</p>;
};

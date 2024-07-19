import React from "react";

export const DetailBox = (props) => {
  return <p className={`details-text ${props.className}`}>{props.details}</p>;
};

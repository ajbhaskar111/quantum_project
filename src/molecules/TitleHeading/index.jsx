import React from "react";

export const TitleHeading = (props) => {
  return <h2 className={`section-title ${props.className}`}>{props.title}</h2>;
};

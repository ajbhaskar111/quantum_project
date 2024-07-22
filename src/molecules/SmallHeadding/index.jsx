import React from "react";

export const SmallHadding = (props) => {
  return (
    <h3 className={`text-2xl font-medium ${props.className}`}>{props.text}</h3>
  );
};

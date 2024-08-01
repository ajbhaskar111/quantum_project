import React from "react";

export const SmallHadding = (props) => {
  return (
    <h3 className={`${props.className} text-2xl font-medium`}>{props.text}</h3>
  );
};

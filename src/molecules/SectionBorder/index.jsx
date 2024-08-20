import React from "react";

export const SectionBorder = (props) => {
  const opicity = {
    opicity: 1,
    borderBottom: "1.2px solid",
  };
  return (
    <div
      type="solid"
      className={`${
        props.className === "bg-red" ? "border-red-500" : "border-black-900"
      }  my-0  w-full`}
      style={opicity}
    ></div>
  );
};

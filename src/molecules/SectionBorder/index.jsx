import React from "react";

export const SectionBorder = (props) => {
  return (
    <div className="container">
      <hr
        type="solid"
        className={`${
          props.className === "bg-red" ? "border-red-300" : "border-black-800"
        }  my-0  w-full`}
      />
    </div>
  );
};

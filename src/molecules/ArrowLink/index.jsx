import React from "react";

export const ArrowLink = (props) => {
  return (
    <a
      href={`${props.url}`}
      className="flex border-circle font-bold align-items-center justify-content-center no-underline bg-white arrow_size icon_link"
      target="_blank"
    >
      {props.iconurl ? (
        <img src={props.iconurl} alt={props.imgname} className="img-fluid" />
      ) : (
        <i
          className={`pi ${props.iconName ? props.iconName : "pi-arrow-right"}  

        fs-20 font-bold color-black `}
        ></i>
      )}
    </a>
  );
};

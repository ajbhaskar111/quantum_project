import React from "react";

export const ArrowButton = (props) => {
  return (
    <>
      <a
        target="blank"
        href={`${props.url}`}
        className={`primary-btn-blck ${props.className} flex link_hover`}
        style={{
          fontSize: 12,
          color: props.textColor,
          textDecoration: "none",
        }}
      >
        <div
          className="flex border-circle font-bold align-items-center justify-content-center"
          style={{
            backgroundColor: props.bgColor,
            width: "38px",
            height: "38px",
          }}
        >
          <i
            className="pi pi-arrow-right"
            style={{ fontSize: "14px", fontWeight: "800" }}
          ></i>
        </div>
        <div
          className="ml-2 flex  font-medium uppercase justify-content-center align-items-center"
          style={{ fontSize: "16px", fontWeight: "600" }}
        >
          <span> {props.buttonText}</span>
        </div>
      </a>
    </>
  );
};

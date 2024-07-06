import React from "react";

export const ArrowButton = (props) => {
  return (
    <>
      {/* <div className="grid">
        <div className="col-1 border-circle text-center" style={{ backgroundColor: "#CDC08B" }}>
          <i className="pi pi-arrow-right" style={{ fontSize: '1rem' }}></i>
        </div>
        <div className="col-11 font-medium uppercase">
        View all services
        </div>
      </div> */}
      <div className="flex" style={{ fontSize: 12, color:props.textColor }}>
        <div
          className="flex border-circle font-bold"
          style={{
            backgroundColor: props.bgColor,
            padding: "0.3rem",
            width: "1.6rem",
            height: "1.6rem",
          }}
        >
          <i className="pi pi-arrow-right" style={{ fontSize: "0.9rem" }}></i>
        </div>
        <div className="ml-2 flex  font-medium uppercase justify-content-center align-items-center">
          {props.buttonText}
        </div>
      </div>
    </>
  );
};

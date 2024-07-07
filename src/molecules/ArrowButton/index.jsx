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
      <div className="primary-btn-blck">
      <a target="blank" href={`${props.url}`} className="flex link_hover" style={{ fontSize: 12, color:props.textColor, textDecoration:"none" }}>
        <div
          className="flex border-circle font-bold align-items-center justify-content-center"
          style={{
            backgroundColor: props.bgColor,
            width: "38px",
            height: "38px",
          }}
        >
          <i className="pi pi-arrow-right" style={{ fontSize: "14px", fontWeight:"800" }}></i>
        </div>
        <div className="ml-2 flex  font-medium uppercase justify-content-center align-items-center" style={{fontSize: "16px", fontWeight:"600"}}>
           <span> {props.buttonText}</span>
        </div>
      </a>
      </div>
     
    </>
  );
};

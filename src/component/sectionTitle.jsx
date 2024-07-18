import React from "react";
import { ArrowButton } from "../molecules/ArrowButton";

export default function SectionTitle(props) {
  return (
    <div className="container mb-7">
      <div className="grid align-items-start">
        <div className="md:col-4 sm:col-12">
          <h2 className="section_title m-0">{props.title}</h2>
        </div>
        <div className="md:col-5 sm:col-12">
          <p className="details_text  m-0">{props.titledetail}</p>
        </div>
        <div className="md:col-3 sm:col-12 flex justify-content-end">
          <ArrowButton
            width="170"
            buttonText={props.buttonText}
            bgColor="#CDC08B"
            textColor="#000000"
            url={props.url}
          />
        </div>
      </div>
    </div>
  );
}

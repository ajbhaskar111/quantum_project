import React from "react";
import { ArrowLink } from "../ArrowLink";

export const ArrowListing = (props) => {
  return (
    <ul className="listing border-listing arrow-listing">
      {props.data
        ? props.data.map((item, index) => (
            <li>
              <div className="grid align-items-center">
                <div className="col-10 p-0">
                  <h3 className="font-medium">{item.listtitle}</h3>
                  <p className="details-text mt-2">{item.listdetail}</p>
                </div>
                <div className="col-2 flex justify-content-end p-0">
                  {item.listlink && (
                    <ArrowLink
                      url={item.listlink}
                      className="bg-tranper border-1 border-red-700"
                    />
                  )}
                </div>
              </div>
            </li>
          ))
        : "Loading..."}
    </ul>
  );
};

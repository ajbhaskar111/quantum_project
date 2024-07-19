import React from "react";
import { ArrowLink } from "../ArrowLink";

export const ArrowListing = (props) => {
  return (
    <ul className="listing border_listing arrow-listing">
      {props.data
        ? props.data.map((item, index) => (
            <li>
              <h3>{item.listtitle}</h3>
              <p className="details-text mb-0 mt-2">{item.listdetail}</p>
              {item.listlink && <ArrowLink url={item.listlink}/>}
            </li>
          ))
        : "Loading..."}
    </ul>
  );
};

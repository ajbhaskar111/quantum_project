import React from "react";
import { ArrowButton } from "./arroButton";

export default function TitleHeading(props) {
  return <h2 className={`section-title ${props.className}`}>{props.title}</h2>;
}

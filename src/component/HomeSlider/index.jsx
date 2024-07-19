import React, { useEffect, useRef, useState } from "react";
import { Image } from "primereact/image";
import { ArrowButton } from "../arroButton";

export const HomeSlider = (props) => {
  const banner_text = {
    position: "absolute",
    left: "0px",
    right: "0px",
    bottom: "82px",
    color: "#fff",
    margin: "0px auto",
  };
  return (
    <>
      <div className="card  justify-content-center relative">
        <Image src="media/home_banners.png" alt="Image" width="100%" />
        <div style={banner_text}>
          <div className="container">
            <h1 className="banner_title">
              Mastering
              <span style={{ fontStyle: "italic", fontWeight: "600" }}>
                real estate
              </span>
              complexities,
              <br /> shaping
              <span style={{ fontStyle: "italic", fontWeight: "600" }}>
                investments
              </span>
              .
            </h1>

            <p className="banner_detail_text">
              We offer a comprehensive range of end-to-end Real Estate
              Development
              <br />
              Business services to shape your ideas into revality
            </p>
            <hr className="my-4" />
            <p>
              <ArrowButton
                width="170"
                buttonText="About Quantums"
                bgColor="#C82027"
                textColor="#fff"
                url="https://www.google.com"
                className="red_button"
              />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

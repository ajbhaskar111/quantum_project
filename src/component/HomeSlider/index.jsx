import React, { useEffect, useRef, useState } from "react";
import { Image } from "primereact/image";
import { ArrowButton } from "../../molecules/ArrowButton";

export const HomeSlider = (props) => {
  return (
    <>
      <div className="card justify-content-center relative">
        <Image src="media/home_banners.png" alt="Image" width="100%" />
        <div className="banner-text color-white">
          <div className="container">
            <h1 className="banner-title text-white ">
              Mastering
              <span
                style={{ fontStyle: "italic", fontWeight: "600" }}
                className="mx-2 inline-block"
              >
                real estate
              </span>
              complexities,
              <br /> shaping
              <span
                style={{ fontStyle: "italic", fontWeight: "600" }}
                className="mx-2 inline-block"
              >
                investments
              </span>
              .
            </h1>

            <p className="banner-detail-text text-white">
              We are elevating investment standards, safeguarding and improving
              asset quality
              <br />
              and enhancing development capabilities.
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

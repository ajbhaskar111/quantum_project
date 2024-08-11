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
            <div className="grid mb-6">
              <div className="lg:col-10  md:col-10 sm:col-12">
                <h1 className="banner-title text-white mb-2">
                  Mastering
                  <span
                    style={{ fontStyle: "italic" }}
                    className="mx-2 inline-block"
                  >
                    real estate
                  </span>
                  complexities,
                  <br /> shaping
                  <span
                    style={{ fontStyle: "italic" }}
                    className="mx-2 inline-block"
                  >
                    investments
                  </span>
                  .
                </h1>

                <p className="banner-detail-text text-white my-5">
                  We are elevating investment standards, safeguarding and
                  improving asset quality
                  <br />
                  and enhancing development capabilities.
                </p>
                <hr className="my-4 bg-red-900" />

                <ArrowButton
                  width="170"
                  buttonText="About Quantums"
                  bgColor="#C82027"
                  textColor="#fff"
                  url="https://www.google.com"
                  className="red_button"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

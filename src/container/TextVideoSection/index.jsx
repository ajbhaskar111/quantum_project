import React, { useRef, useState } from "react";
import { ArrowButton } from "../../molecules/ArrowButton";
import { Image } from "primereact/image";

export const TextVideoSection = () => {
  return (
    <div className="surface-ground py-4 flex justify-content-center">
      <div className="grid border-top-1 w-9" style={{ borderColor: "#C82027" }}>
        <div
          className="lg:col-4 md:col-5 sm:col-12 align-items-center text-2xl"
          style={{ fontFamily: "EB Garamond" }}
        >
          <p>
            Alternative assets,
            <br />
            end-to-end managed
          </p>
        </div>
        <div className="lg:col-8 md:col-7 sm:col-12 font-medium text-justify">
          <p className="text-xs">
            Quantum Projectinfra Pvt Ltd (Quantum) is a Real Estate Advisor and
            Manager for End to End Asset Management. Quantum provides services
            on PAN India basis through its local office presence in all major
            cities.
          </p>
          <p className="text-xs">
            Quantum is driven by its Vision statement: “To elevate the
            professional standards of the Indian realty sector by creating
            projects that deliver the best value and experience” Quantum imbibes
            Core Values of “Integrity, Excellence, Team and Trust”
          </p>
          <ArrowButton
            width="170"
            buttonText="View all services"
            bgColor="#CDC08B"
            textColor="#000000"
          />
          <div
            className="mt-4 pt-4 border-top-1"
            style={{ borderColor: "#C82027" }}
          >
            <Image src="media/home_about_banner.png" alt="Image" width="100%" />
          </div>
        </div>
      </div>
    </div>
  );
};

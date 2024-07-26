import React from "react";
import { ArrowButton } from "../../molecules/ArrowButton";

import "primeicons/primeicons.css";
import { BigImgBox } from "molecules/BigImgBox";

export const TextVideoSection = () => {
  return (
    <section className=" section-padding">
      <div className="container">
        <div className="grid" style={{ borderColor: "#C82027" }}>
          <div className="lg:col-5 md:col-5 sm:col-12 align-items-center text-2xl">
            <h2 className="section-title ">
              Real assets; advised,
              <br />
              monitored and
              <br /> managed
            </h2>
          </div>
          <div className="lg:col-7 md:col-7 sm:col-12 font-medium text-justify">
            <p className="details-text mb-4">
              Quantum Projectinfra Pvt Ltd (Quantum) is a Real Estate Advisor
              and Manager for End to End Asset Management. Quantum provides
              services on PAN India basis through its local office presence in
              all major cities.
            </p>
            <p className="details-text">
              Quantum is driven by its Vision statement: “To elevate the
              professional standards of the Indian realty sector by creating
              projects that deliver the best value and experience” Quantum
              imbibes Core Values of “Integrity, Excellence, Team and Trust”
            </p>
            <ArrowButton
              width="170"
              buttonText="View all services"
              bgColor="#CDC08B"
              textColor="#000000"
              url="https://www.google.com"
            />
            <div
              className="my-5  border-top-1"
              style={{ borderColor: "#C82027" }}
            ></div>
            <BigImgBox imgpath="media/home_about_banner.png" />
          </div>
        </div>
      </div>
    </section>
  );
};

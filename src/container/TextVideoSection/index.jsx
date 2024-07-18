import React, { useRef, useState } from "react";
import { ArrowButton } from "../../molecules/ArrowButton";
import { Image } from "primereact/image";
export const TextVideoSection = () => {
  return (
    <section className=" section_padding">
      <div className="container">
        <div className="grid" style={{ borderColor: "#C82027" }}>
          <div className="lg:col-5 md:col-5 sm:col-12 align-items-center text-2xl">
            <h2 className="section_title">
              Alternative assets,
              <br />
              end-to-end managed
            </h2>
          </div>
          <div className="lg:col-7 md:col-7 sm:col-12 font-medium text-justify">
            <p className="details_text mb-4">
              Quantum Projectinfra Pvt Ltd (Quantum) is a Real Estate Advisor
              and Manager for End to End Asset Management. Quantum provides
              services on PAN India basis through its local office presence in
              all major cities.
            </p>
            <p className="details_text">
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
              className="mt-4 pt-4 border-top-1"
              style={{ borderColor: "#C82027" }}
            >
              <Image
                src="media/home_about_banner.png"
                alt="Image"
                width="100%"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

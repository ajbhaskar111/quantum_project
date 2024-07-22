import { InnerBanner } from "container/InnerpageBanner";
import { ArrowButton } from "molecules/ArrowButton";
import { ArrowListing } from "molecules/ArrowListing";
import { BigImgBox } from "molecules/BigImgBox";
import { Crumbs } from "molecules/Breadcrumbs";
import { DetailBox } from "molecules/DetailBox";
import { SectionBorder } from "molecules/SectionBorder";
import { TitleHeading } from "molecules/TitleHeading";
import Slider2 from "pages/Home/Slider2";
import { Slider } from "primereact/slider";
import React from "react";

const About = () => {
  const listindata2 = [
    {
      listtitle: "Mission Vision",
      listdetail:
        "Quantum is driven by its Vision statement: “To elevate the professional standards of the India",
      listlink: "www.google.com",
    },
    {
      listtitle: "Main USPs of workplace",
      listdetail:
        "Quantum is driven by its Vision statement: “To elevate the professional standards of the India",
      listlink: "www.google.com",
    },
  ];
  return (
    <>
      <Crumbs />
      <InnerBanner
        bannertext="Lorem Ipsum is simply dummy text of the printing and typesetting in..."
        innertitle="About Quantum"
      />
      <section className="section-padding">
        <div className="container">
          <div className="grid section-title">
            <div className="lg:col-4 md:col-3 sm:col-12">
              <TitleHeading title="Our Journey" className="mt-0 mb-3" />
            </div>
            <div className="lg:col-5 md:col-5 sm:col-12">
              <DetailBox
                details="Quantum is driven by its Vision statement: “To elevate the professional standards of the Indian realty sector by creating projects that deliver the best value and experience” Quantum imb  the professional standards of the Indian realty sector by 
"
                className="four-line-text text-justify mt-0 mb-3"
              />
            </div>
            <div className="lg:col-3 md:col-4 sm:col-12 ">
              <div className="flex justify-content-end">
                <ArrowButton
                  width="170"
                  buttonText="Our History"
                  bgColor="#CDC08B"
                  textColor="#000000"
                  url="/"
                  className="ml-0"
                />
              </div>
            </div>
            <div className="lg:col-8 md:col-12 sm:col-12 lg:col-offset-4 mt-4">
              <BigImgBox imgpath="media/about_banner.png" />
            </div>
          </div>
        </div>
      </section>
      <SectionBorder className="border-black-alpha-80" />
      <section className="section-padding">
        <div className="container">
          <div className="grid section-title">
            <div className="lg:col-4 md:col-3 sm:col-12">
              <TitleHeading
                title="Our Purpose & Values"
                className="mt-0 mb-3"
              />
            </div>
            <div className="lg:col-5 md:col-5 sm:col-12">
              <DetailBox
                details="Quantum is driven by its Vision statement: “To elevate the professional standards of the Indian realty sector by creating projects that deliver the best value and experience” Quantum imb  the professional standards of the Indian realty sector by 
"
                className="four-line-text text-justify mt-0 mb-3"
              />
            </div>
            <div className="lg:col-3 md:col-4 sm:col-12 ">
              <div className="flex justify-content-end">
                <ArrowButton
                  width="170"
                  buttonText="Life At Quantum"
                  bgColor="#CDC08B"
                  textColor="#000000"
                  url="/"
                  className="ml-0"
                />
              </div>
            </div>
          </div>
          <div className="grid">
            <div className="lg:col-5 md:col-5 sm:col-12 lg:col-offset-4 mt-4">
              <hr className="border-red-200" />
              <ArrowListing data={listindata2} />
            </div>
          </div>
        </div>
      </section>
      <SectionBorder className="border-black-alpha-80" />
      <section className="section-padding">
        <div className="container">
          <div className="grid section-title">
            <div className="lg:col-4 md:col-3 sm:col-12">
              <TitleHeading title="Hear it From Them" className="mt-0 mb-3" />
            </div>
            <div className="lg:col-5 md:col-4 sm:col-12">
              <DetailBox
                details="para positioning Quantum as a pioneer in its services and THE place for growth in the same field"
                className="four-line-text text-justify mt-0 mb-3"
              />
            </div>
            <div className="lg:col-3 md:col-3 sm:col-12 ">
              <div className="flex justify-content-end">
                <ArrowButton
                  width="350"
                  buttonText="Explore Job Opportunities"
                  bgColor="#CDC08B"
                  textColor="#000000"
                  url="/"
                  className="ml-0"
                />
              </div>
            </div>
          </div>
          <div className="grid">
            <div className="lg:col-12 md:col-12 sm:col-12 mt-4">
              <h1 className="text-7xl text-center">Add Here a Slider</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

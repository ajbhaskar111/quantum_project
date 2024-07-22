import React from "react";
import { InnerBanner } from "container/InnerpageBanner";
import { ArrowButton } from "molecules/ArrowButton";
import { ArrowListing } from "molecules/ArrowListing";
import { BigImgBox } from "molecules/BigImgBox";
import { Crumbs } from "molecules/Breadcrumbs";
import { DetailBox } from "molecules/DetailBox";
import { SectionBorder } from "molecules/SectionBorder";
import { TitleHeading } from "molecules/TitleHeading";
import { TextVideoSection } from "container/TextVideoSection";

export const OurPeople = () => {
  return (
    <>
      <Crumbs />
      <InnerBanner
        bannertext="Lorem Ipsum is simply dummy text of the printing and typesetting in..."
        innertitle="Our People"
      />
      <section className="section-padding">
        <div className="container">
          <div className="grid section-title">
            <div className="lg:col-4 md:col-3 sm:col-12">
              <TitleHeading title="Our Leaders" className="mt-0 mb-3" />
            </div>

            <div className="lg:col-12 md:col-12 sm:col-12  mt-4">
              <h1>Add slider</h1>
            </div>
          </div>
        </div>
      </section>
      <SectionBorder className="border-black-alpha-80" />
      <TextVideoSection />
    </>
  );
};

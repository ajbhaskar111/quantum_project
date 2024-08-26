import { SectionBorder } from "molecules/SectionBorder";
import { SmallHadding } from "molecules/SmallHeadding";
import { TitleHeading } from "molecules/TitleHeading";
import React from "react";

export const InnerBanner = (props) => {
  return (
    <>
      <section className="inner-page-banner ">
        <div className="container">
          <SmallHadding
            text={props.innertitle}
            className="text-5xl mt-2 mb-4 ef-gamon-font"
          />
        </div>

        <div className="container my-3">
          <SectionBorder className="bg-red" />
          <div className="inner-page-banner relative flex my-3">
            <img
              src="media/inner-page-banner.png"
              className="img-fluid relative"
            />
            <div className="grid inner-banner-text">
              <div className="lg:col-7 md:col-10 sm:col-12">
                <h3 className="ef-gamon-font text-5xl text-white two-line-text font-normal">
                  {props.bannertext}
                </h3>
              </div>
            </div>
          </div>
          <SectionBorder className="bg-red" />
        </div>
      </section>
    </>
  );
};

import React from "react";
import { InnerBanner } from "container/InnerpageBanner";
import { Crumbs } from "molecules/Breadcrumbs";
import { SectionBorder } from "molecules/SectionBorder";
import { TitleHeading } from "molecules/TitleHeading";
import { TextVideoSection } from "container/TextVideoSection";

export const OurPeople = () => {
  const sliderdata = [
    {
      title: "Lorem Ipsum is simply dummy text of the printing and...",
      description:
        "Quantum is driven by its Vision statement: “To elevate the professional standards of the Indian realty sector by creating projects that deliver the best value and experience” Quantum imb...",
      // image: "media/home_slider/blog-1-400x248 1.png",
      video: [
        "media/home_slider/blog-1-400x248 1.png",
        "https://www.apollo.com/008dda46-7301-4387-bc6b-03343b468d4b",
      ],
    },
    {
      title: "Lorem Ipsum is simply dummy text of the printing and...",
      description:
        "Quantum is driven by its Vision statement: “To elevate the professional standards of the Indian realty sector by creating projects that deliver the best value and experience” Quantum imb...",
      image: "media/home_slider/blog-1-400x248 1 (1).png",
    },
    {
      title: "Lorem Ipsum is simply dummy text of the printing and...",
      description:
        "Quantum is driven by its Vision statement: “To elevate the professional standards of the Indian realty sector by creating projects that deliver the best value and experience” Quantum imb...",
      image: "media/home_slider/blog-1-400x248 1.png",
    },
    {
      title: "Lorem Ipsum is simply dummy text of the printing and...",
      description:
        "Quantum is driven by its Vision statement: “To elevate the professional standards of the Indian realty sector by creating projects that deliver the best value and experience” Quantum imb...",
      image: "media/home_slider/blog-1-400x248 1 (2).png",
    },
  ];
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
              {/* <MainSlider data={sliderdata}  /> */}
            </div>
          </div>
        </div>
      </section>
      <SectionBorder className="border-black-alpha-80" />
      <TextVideoSection />
    </>
  );
};

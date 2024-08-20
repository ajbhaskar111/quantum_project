import { MainSlider } from "component/MainSlider";
import { InnerBanner } from "container/InnerpageBanner";
import { ArrowButton } from "molecules/ArrowButton";
import { ArrowLink } from "molecules/ArrowLink";
import { BigImgBox } from "molecules/BigImgBox";
import { Crumbs } from "molecules/Breadcrumbs";
import { DetailBox } from "molecules/DetailBox";
import { SectionBorder } from "molecules/SectionBorder";
import { TitleHeading } from "molecules/TitleHeading";
import React from "react";
import { TestimonialSection } from "./testimonial";

export const CommunityImpect = () => {
  const manage_data = [
    {
      icon: "/media/diversity-icon.png",
      label: "Diversity",
      details:
        "Quantum is driven by its Vision statement: “To elevate the professional standards of the Indian realty sector by creating proje...",
    },
    {
      icon: "/media/equity-icon.png",
      label: "Equity",
      details:
        "Quantum is driven by its Vision statement: “To elevate the professional standards of the Indian realty sector by creating proje...",
    },
    {
      icon: "/media/inclusion-icon.png",
      label: "Inclusion",
      details:
        "Quantum is driven by its Vision statement: “To elevate the professional standards of the Indian realty sector by creating proje...",
    },
  ];
  const sliderdata = [
    {
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesettin...",
      description:
        "Quantum is driven by its Vision statement: “To elevate the professional standards of the Indian realty sector by creating projects that deliver the best value and experience” Quantum imb...",
      image: "media/home_slider/blog-1-400x248 1.png",
    },
    {
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesettin...",
      description:
        "Quantum is driven by its Vision statement: “To elevate the professional standards of the Indian realty sector by creating projects that deliver the best value and experience” Quantum imb...",
      image: "media/home_slider/blog-1-400x248 1 (1).png",
    },
    {
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesettin...",
      description:
        "Quantum is driven by its Vision statement: “To elevate the professional standards of the Indian realty sector by creating projects that deliver the best value and experience” Quantum imb...",
      image: "media/home_slider/blog-1-400x248 1.png",
    },
    {
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesettin...",
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
        innertitle="Community Impact"
      />
      <section className="section-padding ">
        <div className="container">
          <div className="grid">
            <div className="lg:col-3 md:col-4 sm:col-12">
              <TitleHeading
                title="Alternative assets, end-to-end managed"
                className="mt-0"
              />
            </div>
            <div className="lg:col-9 md:col-8 sm:col-12">
              <div className="grid">
                {manage_data.map((item) => (
                  <div className="lg:col-4 md:col-4 sm:col-4">
                    <div className="icon-box ml-auto mr-auto">
                      <img
                        src={`${item.icon}`}
                        alt={item.icon}
                        className="img-fluid"
                      />
                    </div>
                    <h4 className="text-xl font-semibold uppercase text-center mb-6">
                      {item.label}
                    </h4>
                    <DetailBox
                      details={item.details}
                      className="four-line-text"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <SectionBorder />
      </div>

      <section className="section-padding ">
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
                details="Quantum is driven by its Vision statement: “To elevate the professional standards of the Indian realty sector by creating projects that deliver the best value and experience” Quantum imb  the professional standards of the Indian realty sector byQuantum Projectinfra Pvt Ltd (Quantum) is a Real Estate Advisor and Manager for End to End Asset Management. Quantum provides services on PAN India basis through its local office presence in all major cities. 
"
                className="four-line-text text-justify mt-0 mb-3"
              />
            </div>
            <div className="lg:col-3 md:col-4 sm:col-12 ">
              <div className="flex justify-content-end">
                <ArrowButton
                  width="170"
                  buttonText="Learn more"
                  bgColor="#CDC08B"
                  textColor="#000000"
                  url="/"
                  className="ml-0"
                />
              </div>
            </div>
          </div>
          <div className="grid">
            <div className="lg:col-8 md:col-12 sm:col-12 lg:col-offset-4">
              <BigImgBox imgpath={`/media/Rectangle 33.png`} />
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding thmbg-nvblue text-white pb-0 testimonial-section relative">
        <TestimonialSection />
      </section>
      <section className="section-padding">
        <div className="container">
          <div className="grid section-title">
            <div className="lg:col-6 md:col-6 sm:col-12">
              <TitleHeading title="Our Social Impact" className="mt-0 mb-3" />
            </div>

            <div className="lg:col-6 md:col-6 sm:col-12 ">
              <div className="flex justify-content-end">
                <ArrowButton
                  width="170"
                  buttonText="View All"
                  bgColor="#CDC08B"
                  textColor="#000000"
                  url="/"
                  className="ml-0"
                />
              </div>
            </div>
          </div>
          <MainSlider data={sliderdata} detailcss="two-line-text" />
        </div>
      </section>
    </>
  );
};

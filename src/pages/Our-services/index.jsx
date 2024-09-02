import { InnerBanner } from "container/InnerpageBanner";
import { ArrowButton } from "molecules/ArrowButton";
import { Crumbs } from "molecules/Breadcrumbs";
import { DetailBox } from "molecules/DetailBox";
import { SectionBorder } from "molecules/SectionBorder";
import { TitleHeading } from "molecules/TitleHeading";

import React from "react";

export const Our_services = () => {
  const manage_data = [
    {
      icon: "/media/diversity-icon.png",
      label: "Pre-Investment",
      details:
        "Quantum is driven by its Vision statement: “To elevate the professional standards of the Indian realty sector by creating proje...",
    },
    {
      icon: "/media/equity-icon.png",
      label: "Post-Investment",
      details:
        "Quantum is driven by its Vision statement: “To elevate the professional standards of the Indian realty sector by creating proje...",
    },
    {
      icon: "/media/inclusion-icon.png",
      label: "Value-add",
      details:
        "Quantum is driven by its Vision statement: “To elevate the professional standards of the Indian realty sector by creating proje...",
    },
  ];
  const develoeper_data = [
    {
      icon: "/media/diversity-icon.png",
      label: "Design & Plan",
      details:
        "Quantum is driven by its Vision statement: “To elevate the professional standards of the Indian realty sector by creating proje...",
    },
    {
      icon: "/media/equity-icon.png",
      label: "Execution",
      details:
        "Quantum is driven by its Vision statement: “To elevate the professional standards of the Indian realty sector by creating proje...",
    },
    {
      icon: "/media/inclusion-icon.png",
      label: "Value-add",
      details:
        "Quantum is driven by its Vision statement: “To elevate the professional standards of the Indian realty sector by creating proje...",
    },
  ];
  const other_data = [
    {
      icon: "/media/diversity-icon.png",
      label: "Pre-Investment",
      details:
        "Quantum is driven by its Vision statement: “To elevate the professional standards of the Indian realty sector by creating proje...",
    },
    {
      icon: "/media/equity-icon.png",
      label: "Execution",
      details:
        "Quantum is driven by its Vision statement: “To elevate the professional standards of the Indian realty sector by creating proje...",
    },
    {
      icon: "/media/inclusion-icon.png",
      label: "Ad-Hoc",
      details:
        "Quantum is driven by its Vision statement: “To elevate the professional standards of the Indian realty sector by creating proje...",
    },
  ];
  return (
    <>
      <Crumbs />
      <InnerBanner
        bannertext="Lorem Ipsum is simply dummy text of the printing and typesetting in..."
        innertitle="Our Services"
      />
      <section className="section-padding">
        <div className="container">
          <div className="grid section-title">
            <div className="lg:col-4 md:col-5 sm:col-12">
              <TitleHeading title="What we do" className="mt-0 mb-3" />
            </div>
            <div className="lg:col-8 md:col-7 sm:col-12">
              <div className="grid">
                <div className="lg:col-12 md:col-12 sm:col-12">
                  <DetailBox
                    details="Quantum is driven by its Vision statement: “To elevate the professional standards of the Indian realty sector by creating projects that deliver the best value and experience” Quantum imb  the professional standards of the Indian realty sector by 
"
                    className="four-line-text text-justify mt-0 mb-3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <SectionBorder />
      </div>
      <section className="section-padding">
        <div className="container">
          <div className="grid section-title">
            <div className="lg:col-4 md:col-5 sm:col-12">
              <TitleHeading title="For Investors" className="mt-0 mb-3" />
            </div>
            <div className="lg:col-8 md:col-7 sm:col-12">
              <div className="grid">
                <div className="lg:col-12 md:col-12 sm:col-12">
                  <DetailBox
                    details="Quantum is driven by its Vision statement: “To elevate the professional standards of the Indian realty sector by creating projects that deliver the best value and experience” Quantum imb  the professional standards of the Indian realty sector by 
"
                    className="four-line-text text-justify mt-0 mb-3"
                  />
                </div>
                <div className="lg:col-12 md:col-12 sm:col-12 ">
                  <div className="flex justify-content-start">
                    <ArrowButton
                      width="170"
                      buttonText="View Detailed Investor Services"
                      bgColor="#CDC08B"
                      textColor="#000000"
                      url="/"
                      className="ml-0"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid mt-6 left-border-listing">
            {manage_data.map((item) => (
              <div className="lg:col-4 md:col-4 sm:col-4 column-box">
                <a href="" className="text-black-900 no-underline">
                  <div className="icon-box ">
                    <img
                      src={`${item.icon}`}
                      alt={item.icon}
                      className="img-fluid"
                    />
                  </div>
                  <h4 className="text-4xl font-medium mt-3 mb-5 text-black-alpha-90 eb-garamond-font">
                    {item.label}
                  </h4>
                  <DetailBox
                    details={item.details}
                    className="four-line-text"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="container">
        <SectionBorder />
      </div>
      <section className="section-padding">
        <div className="container">
          <div className="grid section-title">
            <div className="lg:col-4 md:col-5 sm:col-12">
              <TitleHeading title="For Investors" className="mt-0 mb-3" />
            </div>
            <div className="lg:col-8 md:col-7 sm:col-12">
              <div className="grid">
                <div className="lg:col-12 md:col-12 sm:col-12">
                  <DetailBox
                    details="Quantum is driven by its Vision statement: “To elevate the professional standards of the Indian realty sector by creating projects that deliver the best value and experience” Quantum imb  the professional standards of the Indian realty sector by 
"
                    className="four-line-text text-justify mt-0 mb-3"
                  />
                </div>
                <div className="lg:col-12 md:col-12 sm:col-12 ">
                  <div className="flex justify-content-start">
                    <ArrowButton
                      width="170"
                      buttonText="View Detailed Investor Services"
                      bgColor="#CDC08B"
                      textColor="#000000"
                      url="/"
                      className="ml-0"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid mt-6 left-border-listing">
            {develoeper_data.map((item) => (
              <div className="lg:col-4 md:col-4 sm:col-4 column-box">
                <a href="" className="text-black-900 no-underline">
                  <div className="icon-box ">
                    <img
                      src={`${item.icon}`}
                      alt={item.icon}
                      className="img-fluid"
                    />
                  </div>
                  <h4 className="text-4xl font-medium mt-3 mb-5 text-black-alpha-90 eb-garamond-font">
                    {item.label}
                  </h4>
                  <DetailBox
                    details={item.details}
                    className="four-line-text"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="container">
        <SectionBorder />
      </div>
      <section className="section-padding">
        <div className="container">
          <div className="grid section-title">
            <div className="lg:col-4 md:col-5 sm:col-12">
              <TitleHeading title="For Developers" className="mt-0 mb-3" />
            </div>
            <div className="lg:col-8 md:col-7 sm:col-12">
              <div className="grid">
                <div className="lg:col-12 md:col-12 sm:col-12">
                  <DetailBox
                    details="Quantum is driven by its Vision statement: “To elevate the professional standards of the Indian realty sector by creating projects that deliver the best value and experience” Quantum imb  the professional standards of the Indian realty sector by 
"
                    className="four-line-text text-justify mt-0 mb-3"
                  />
                </div>
                <div className="lg:col-12 md:col-12 sm:col-12 ">
                  <div className="flex justify-content-start">
                    <ArrowButton
                      width="170"
                      buttonText="View Detailed Investor Services"
                      bgColor="#CDC08B"
                      textColor="#000000"
                      url="/"
                      className="ml-0"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid mt-6 left-border-listing">
            {other_data.map((item) => (
              <div className="lg:col-4 md:col-4 sm:col-4 column-box">
                <a href="" className="text-black-900 no-underline">
                  <div className="icon-box ">
                    <img
                      src={`${item.icon}`}
                      alt={item.icon}
                      className="img-fluid"
                    />
                  </div>
                  <h4 className="text-4xl font-medium mt-3 mb-5 text-black-alpha-90 eb-garamond-font">
                    {item.label}
                  </h4>
                  <DetailBox
                    details={item.details}
                    className="four-line-text"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

import { InnerBanner } from "container/InnerpageBanner";
import { Crumbs } from "molecules/Breadcrumbs";
import { DetailBox } from "molecules/DetailBox";
import { SectionBorder } from "molecules/SectionBorder";
import { TitleHeading } from "molecules/TitleHeading";
import { Accordion, AccordionTab } from "primereact/accordion";
import React from "react";

export const InvestorServices = () => {
  const clientdata = [
    {
      id: 1,
      header: "Feasibility Analysis",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco nisi ut aliquip ex ea commodo consequat. ",
      image_path: "/media/home_slider/client_box.png",
      type: "pre-investment",
    },
    {
      id: 2,
      header: "Due-Diligence",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco nisi ut aliquip ex ea commodo consequat. ",
      image_path: "/media/home_slider/client_box.png",
      type: "pre-investment",
    },
    {
      id: 3,
      header: "Valuation",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco nisi ut aliquip ex ea commodo consequat. ",
      image_path: "/media/home_slider/client_box.png",
      type: "pre-investment",
    },
    {
      id: 4,
      header: "Strategic Consulting",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco nisi ut aliquip ex ea commodo consequat. ",
      image_path: "/media/home_slider/client_box.png",
      type: "pre-investment",
    },
    {
      id: 5,
      header: "Value Engineering",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco nisi ut aliquip ex ea commodo consequat. ",
      image_path: "/media/home_slider/client_box.png",
      type: "pre-investment",
    },
    {
      id: 6,
      header: "Asset Management",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco nisi ut aliquip ex ea commodo consequat. ",
      image_path: "/media/home_slider/client_box.png",
      type: "pre-investment2",
    },
    {
      id: 7,
      header: "Development Management",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco nisi ut aliquip ex ea commodo consequat. ",
      image_path: "/media/home_slider/client_box.png",
      type: "pre-investment2",
    },
    {
      id: 8,
      header: "Project Management",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco nisi ut aliquip ex ea commodo consequat. ",
      image_path: "/media/home_slider/client_box.png",
      type: "pre-investment2",
    },
    {
      id: 9,
      header: "QS & Cost Management",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco nisi ut aliquip ex ea commodo consequat. ",
      image_path: "/media/home_slider/client_box.png",
      type: "pre-investment2",
    },
    {
      id: 10,
      header: "Capital Markets",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco nisi ut aliquip ex ea commodo consequat. ",
      image_path: "/media/home_slider/client_box.png",
      type: "value-Services",
    },
    {
      id: 11,
      header: "Sales & Leasing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco nisi ut aliquip ex ea commodo consequat. ",
      image_path: "/media/home_slider/client_box.png",
      type: "value-Services",
    },
    {
      id: 12,
      header: "Custom Ad-hoc Assignments",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco nisi ut aliquip ex ea commodo consequat. ",
      image_path: "/media/home_slider/client_box.png",
      type: "value-Services",
    },
  ];
  return (
    <>
      <Crumbs />
      <InnerBanner
        bannertext="Lorem Ipsum is simply dummy text of the printing and typesetting in..."
        innertitle="Investor Services"
      />
      <section className="section-padding">
        <div className="container">
          <div className="grid">
            <div className="lg:col-12 md:col-12 sm:col-12">
              <div className="grid">
                <div className="lg:col-4 md:col-5 sm:col-12">
                  <TitleHeading title="Pre-Investment" className="mt-0 mb-3" />
                </div>
                <div className="lg:col-8 md:col-7 sm:col-12">
                  <DetailBox
                    details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam "
                    className="text-justify"
                  />

                  <Accordion multiple activeIndex={[0]}>
                    {clientdata.map((item, index) =>
                      item.type == "pre-investment" ? (
                        <AccordionTab header={item.header} key={index}>
                          <DetailBox
                            details={item.description}
                            className="m-0 px-3 pb-3"
                          />
                        </AccordionTab>
                      ) : (
                        "Loding Data"
                      )
                    )}
                  </Accordion>
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
          <div className="grid">
            <div className="lg:col-12 md:col-12 sm:col-12">
              <div className="grid">
                <div className="lg:col-4 md:col-5 sm:col-12">
                  <TitleHeading title="Pre-Investment" className="mt-0 mb-3" />
                </div>
                <div className="lg:col-8 md:col-7 sm:col-12">
                  <DetailBox
                    details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam "
                    className="text-justify"
                  />

                  <Accordion multiple activeIndex={[1]}>
                    {clientdata.map((item, index) =>
                      item.type == "pre-investment2" ? (
                        <AccordionTab header={item.header} key={index}>
                          <DetailBox
                            details={item.description}
                            className="m-0 px-3 pb-3"
                          />
                        </AccordionTab>
                      ) : (
                        <h5>Loding Data</h5>
                      )
                    )}
                  </Accordion>
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
          <div className="grid">
            <div className="lg:col-12 md:col-12 sm:col-12">
              <div className="grid">
                <div className="lg:col-4 md:col-5 sm:col-12">
                  <TitleHeading
                    title="Value Add Services"
                    className="mt-0 mb-3"
                  />
                </div>
                <div className="lg:col-8 md:col-7 sm:col-12">
                  <DetailBox
                    details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam "
                    className="text-justify"
                  />

                  <Accordion multiple activeIndex={[1]}>
                    {clientdata.map((item, index) =>
                      item.type == "value-Services" ? (
                        <AccordionTab header={item.header} key={index}>
                          <DetailBox
                            details={item.description}
                            className="m-0 px-3 pb-3"
                          />
                        </AccordionTab>
                      ) : (
                        <h5>Loding Data</h5>
                      )
                    )}
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

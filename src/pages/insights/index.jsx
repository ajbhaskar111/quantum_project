import { InnerBanner } from "container/InnerpageBanner";
import { Crumbs } from "molecules/Breadcrumbs";
import { TitleHeading } from "molecules/TitleHeading";
import React, { useState } from "react";
import { Accordion, AccordionTab } from "primereact/accordion";
import { SmallHadding } from "molecules/SmallHeadding";
import { DetailBox } from "molecules/DetailBox";
import { Image } from "primereact/image";
import { ArrowButton } from "molecules/ArrowButton";
import ItemSlider from "./itemSlider";
import styled from "styled-components";
import { MultiSelect } from "primereact/multiselect";

const CustDropdown = styled(MultiSelect)`
  border: 1px solid rgb(200, 32, 39);
  background: transparent;
  border-radius: 0;
  font-weight: 500;
`;

export const Insights = () => {
  const clientdata = [
    {
      id: 1,
      client_name: "CGI",
      category: "",
      image_path: "/media/home_slider/client_box.png",
    },
    {
      id: 2,
      client_name: "CGI",
      category: "ARC",
      image_path: "/media/home_slider/client_box-1.png",
    },
    {
      id: 3,
      client_name: "CGI",
      category: "ARC",
      image_path: "/media/home_slider/3_1.png",
    },
    {
      id: 4,
      client_name: "CGI",
      category: "ARC",
      image_path: "/media/home_slider/4_1.png",
    },
    {
      id: 1,
      client_name: "CGI",
      category: "",
      image_path: "/media/home_slider/client_box.png",
    },
    {
      id: 2,
      client_name: "CGI",
      category: "Banks",
      image_path: "/media/home_slider/client_box-1.png",
    },
    {
      id: 3,
      client_name: "CGI",
      category: "Banks",
      image_path: "/media/home_slider/3_1.png",
    },
    {
      id: 4,
      client_name: "CGI",
      category: "Banks",
      image_path: "/media/home_slider/4_1.png",
    },
  ];

  const [selectedStrategies, setSelectedStrategies] = useState(null);
  const strategies = [
    { name: "Real Assets", code: "RA" },
    { name: "Retirement Solutions", code: "RS" },
    { name: "Equity", code: "EQ" },
    { name: "Credit", code: "CR" },
    { name: "Financial Services", code: "FS" },
    { name: "Secondaries", code: "SE" },
  ];

  return (
    <>
      <Crumbs />

      <section>
        <div className="container">
          <div className="grid section-title">
            <div className="lg:col-4 md:col-3 sm:col-12">
              <TitleHeading title="Insights" className="mt-0 mb-3" />
            </div>
          </div>
          <div className="my-5 border-top-1 border-bottom-1 py-3 border-red-600 flex">
            <div style={{ backgroundColor: "#4E6766" }} className="w-full">
              <div className="grid p-5 align-items-center">
                <div className="lg:col-5 md:col-6 sm:col-12 text-white">
                  <SmallHadding
                    text="Investment Insights"
                    className="mb-4 text-5xl eb-garamond-font"
                  />
                </div>
                <div className="lg:col-7 md:col-6 sm:col-12 lg:p-8 md:p-4 sm:p-1">
                  <div className="flex align-items-center text-base mb-4">
                    <DetailBox
                      details=" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the Ind..."
                      className="text-white fs-30"
                    />
                  </div>
                  <ArrowButton
                    width="170"
                    buttonText="Read more"
                    arrowColor="#000"
                    bgColor="#CDC08B"
                    textColor="#FFF"
                    url="/"
                    className="ml-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid align-items-center">
            <div className="lg:col-3 md:col-6 sm:col-12">
              <div
                className="flex align-items-center"
                style={{
                  borderBottom: "2px solid rgb(200, 32, 39)",
                  width: "100px",
                  paddingLeft: "1rem",
                }}
              >
                <i className="pi pi-sliders-h mr-2"></i>
                <span className="text-lg s-25">Filter</span>
              </div>
            </div>

            <div className="lg:col-3 md:col-6 sm:col-12">
              <CustDropdown
                multiple={true}
                value={selectedStrategies}
                onChange={(e) => setSelectedStrategies(e.value)}
                options={strategies}
                optionLabel="name"
                placeholder="Select a Strategies"
                className="w-full "
                checkmark={true}
                highlightOnSelect={false}
                style={{
                  border: "1px solid rgb(200, 32, 39)",
                  background: "transparant",
                }}
              />
            </div>

            <div className="lg:col-3 md:col-6 sm:col-12">
              <CustDropdown
                multiple={true}
                value={selectedStrategies}
                onChange={(e) => setSelectedStrategies(e.value)}
                options={strategies}
                optionLabel="name"
                placeholder="Select a Formats"
                className="w-full"
                checkmark={true}
                highlightOnSelect={false}
                style={{
                  border: "1px solid rgb(200, 32, 39)",
                  background: "transparant",
                }}
              />
            </div>

            <div className="lg:col-3 md:col-6 sm:col-12">
              <CustDropdown
                multiple={true}
                value={selectedStrategies}
                onChange={(e) => setSelectedStrategies(e.value)}
                options={strategies}
                optionLabel="name"
                placeholder="Select a Topics"
                className="w-full "
                checkmark={true}
                highlightOnSelect={false}
                style={{
                  border: "1px solid rgb(200, 32, 39)",
                  background: "transparant",
                }}
              />
            </div>
          </div>

          <div className="grid mt-5">
            <div className="lg:col-12 md:col-12 sm:col-12  mt-4">
              <ItemSlider />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

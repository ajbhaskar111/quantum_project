import React from "react";
import { HomeSlider } from "../../component/HomeSlider";
import { TextVideoSection } from "../../container/TextVideoSection";
import { TitleHeading } from "../../molecules/TitleHeading";
import { ArrowListing } from "../../molecules/ArrowListing";
import { ArrowButton } from "../../molecules/ArrowButton";
import { DetailBox } from "../../molecules/DetailBox";


const Home = () => {
  const listindata = [
    {
      listtitle: "3 billion sqft",
      listdetail: "Area Serviced",
      listlink:"https://www.google.com"
    },
    {
      listtitle: "4400+",
      listdetail: "Projects Completed",
    },
    {
      listtitle: "150+",
      listdetail: "Institutional Investors",
    },
    {
      listtitle: "15+",
      listdetail: "Indian Cites",
    },
  ];
  return (
    <>
      <section className="sliderSection">
        <HomeSlider />
      </section>
      <section className="video_section">
        <TextVideoSection />
      </section>
      <div className="container">
        <hr type="solid" className="bg-black m-0" />
      </div>
      <section className="map_sction section_padding">
        <div className="container">
          <div className="grid align-items-center">
            <div className="lg:col-4 md:col-5 sm:col-12">
              <div className="section-title">
                <TitleHeading title="Quantum History" className="m-0" />
              </div>
              <ArrowListing data={listindata} />
            </div>
            <div className="lg:col-8 md:col-7 sm:col-12">
              <img
                src="media/HomePageMap.png"
                alt={"map-image"}
                className="img-fluid m-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white client_section section_padding">
        <div className="container">
          <div className="grid section-title">
            <div className="md:col-6 sm:col-12">
              <TitleHeading title="Trusted Globally" className="m-0" />
              <DetailBox details="by 300+ institutional investors & real-estate developers" />
            </div>
            <div className="md:col-6 sm:col-12 flex align-items-center justify-content-end">
              <ArrowButton
                width="170"
                buttonText="View all services"
                bgColor="#CDC08B"
                textColor="#000000"
                url="https://www.google.com"
              />
            </div>
          </div>
          <div>
            <h1>Put the slider component in here</h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

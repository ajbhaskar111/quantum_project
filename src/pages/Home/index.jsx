import React from "react";
import { HomeSlider } from "../../component/HomeSlider";
import { TextVideoSection } from "../../container/TextVideoSection";
import DetailBox from "../../component/detailBox";
import TitleHeading from "../../component/titleHeading";
import { ArrowButton } from "../../component/arroButton";

const Home = () => {
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
            <div className="md:col-6 sm:col-12">
              <h1>Left side</h1>
            </div>
            <div className="md:col-6 sm:col-12">
              <img
                src="media/HomePageMap.png"
                alt="map-image"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white client_section section_padding">
        <div className="container">
          <div className="grid section-title">
            <div className="md:col-6 sm:col-12">
              <TitleHeading title="Trusted Globally" />
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
        </div>
      </section>
    </>
  );
};

export default Home;

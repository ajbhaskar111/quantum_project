import React from "react";
import { HomeSlider } from "../../component/HomeSlider";
import { TextVideoSection } from "../../container/TextVideoSection";
import { TitleHeading } from "../../molecules/TitleHeading";
import { ArrowListing } from "../../molecules/ArrowListing";
import { ArrowButton } from "../../molecules/ArrowButton";
import { DetailBox } from "../../molecules/DetailBox";
import { Carousel } from "primereact/carousel";
import { responsiveSliderOptions } from "../../assets/config";
import Slider1 from "./Slider1";
import Slider2 from "./Slider2";

const Home = () => {
  const listindata = [
    {
      listtitle: "3 billion sqft",
      listdetail: "Area Serviced",
      listlink: "https://www.google.com",
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

     <Slider1/>
     <Slider2/>
    </>
  );
};

export default Home;

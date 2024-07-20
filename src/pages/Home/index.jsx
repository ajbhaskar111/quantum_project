import React, { useEffect } from "react";
import { useSelector, RootStateOrAny } from "react-redux";

import { HomeSlider } from "../../component/HomeSlider";
import { TextVideoSection } from "../../container/TextVideoSection";
import { TitleHeading } from "../../molecules/TitleHeading";
import { ArrowListing } from "../../molecules/ArrowListing";

import Slider1 from "./Slider1";
import Slider2 from "./Slider2";

const Home = () => {
  const { homeSlider } = useSelector(
    (state: RootStateOrAny) => state.dashboard
  );

  useEffect(() => {
    console.log("homeSlider", homeSlider);
  }, [homeSlider]);

  const listindata = [
    {
      listtitle: "3 billion sqft",
      listdetail: "Area Serviced",
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
      <section className="video-section">
        <TextVideoSection />
      </section>
      <div className="container">
        <hr type="solid" className="bg-black m-0" />
      </div>
      <section className="map_sction section-padding">
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
      <section className="bg-white client_section section-padding">
        <Slider1 />
      </section>
      <section className="client_section section-padding">
        <Slider2 />
      </section>
      <section className="section-padding"></section>
    </>
  );
};

export default Home;

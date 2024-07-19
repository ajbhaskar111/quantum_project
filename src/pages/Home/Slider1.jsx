import React, { useState } from "react";
import { TitleHeading } from "../../molecules/TitleHeading";
import { ArrowButton } from "../../molecules/ArrowButton";
import { DetailBox } from "../../molecules/DetailBox";
import { Carousel } from "primereact/carousel";
import { responsiveSliderOptions } from "../../assets/config";

const Slider1 = () => {
  const [sliderdata, setSliderdata] = useState([
    "media/home_slider/client_box.png",
    "media/home_slider/client_box-1.png",
    "media/home_slider/3_1.png",
    "media/home_slider/4_1.png",
    "media/home_slider/client_box.png",
    "media/home_slider/client_box-1.png",
    "media/home_slider/3_1.png",
  ]);


  const productTemplate = (item) => {
    return (
      <div className="text-center p-3">
        <img
          src={item}
          //alt={product.name}
          className="w-full"
        />
      </div>
    );
  };

  return (
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
              buttonText="Clients"
              bgColor="#CDC08B"
              textColor="#000000"
              url="https://www.google.com"
            />
          </div>
        </div>
        <div>
          <Carousel
            value={sliderdata}
            numVisible={4}
            numScroll={1}
            responsiveOptions={responsiveSliderOptions}
            itemTemplate={productTemplate}
            showIndicators={false}
            showNavigators={false}
            autoplayInterval={3000}
            circular={true}
            style={{ backgroundColor: "transparent" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Slider1;

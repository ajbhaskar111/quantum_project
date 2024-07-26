import React, { useState } from "react";
import { TitleHeading } from "../../molecules/TitleHeading";
import { ArrowButton } from "../../molecules/ArrowButton";
import { DetailBox } from "../../molecules/DetailBox";
import { Carousel } from "primereact/carousel";
import { responsiveSliderOptions } from "../../assets/config";
import { SmallHadding } from "molecules/SmallHeadding";

const Slider2 = () => {
  const [sliderdata, setSliderdata] = useState([
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
  ]);
  const productTemplate = (item) => {
    return (
      <div className="text-justify p-3">
        <img
          src={item.image}
          //alt={product.name}
          className="w-full"
        />
        <SmallHadding text={item.title} />
        {/* <p className="font-medium">{item.title}</p> */}
        <DetailBox details={item.description} />
      </div>
    );
  };

  return (
    <div className="container">
      <div className="grid section-title">
        <div className="md:col-6 sm:col-12">
          <TitleHeading title="Quantum Insights" className="m-0" />
        </div>
        <div className="md:col-6 sm:col-12 flex align-items-center justify-content-end">
          <ArrowButton
            width="170"
            buttonText="View all "
            bgColor="#CDC08B"
            textColor="#000000"
            url="https://www.google.com"
          />
        </div>
      </div>
      <div>
        <Carousel
          value={sliderdata}
          numVisible={3}
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
  );
};

export default Slider2;

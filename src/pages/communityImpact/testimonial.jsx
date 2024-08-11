import React, { useEffect, useState } from "react";
import { Button } from "primereact/button";
import { Carousel } from "primereact/carousel";
import { Tag } from "primereact/tag";
import { DetailBox } from "molecules/DetailBox";

export const TestimonialSection = () => {
  const [sliderdata, setSliderdata] = useState([
    {
      name: "Amit Tindwani",
      desig: "Chief Sustainability Officer",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but a...",
      image: "media/testimonail-user-img.png",
    },
    {
      name: "Amit Tindwani",
      desig: "Chief Sustainability Officer",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but a...",
      image: "media/testimonail-user-img.png",
    },
    {
      name: "Amit Tindwani",
      desig: "Chief Sustainability Officer",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but a...",
      image: "media/testimonail-user-img.png",
    },
    {
      name: "Amit Tindwani",
      desig: "Chief Sustainability Officer",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but a...",
      image: "media/testimonail-user-img.png",
    },
  ]);

  const responsiveOptions = [
    {
      breakpoint: "1400px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const productTemplate = (item) => {
    return (
      <div className="pt-5 px-3 bg-transparent grid">
        <div className="lg:col-4 md:col-5 sm:col-12 pb-0">
          <div className="testimonial-user-box">
            <img src={`${item.image}`} alt={item.name} className="img-fluid" />
          </div>
        </div>
        <div className="lg:col-8 md:col-7 sm:col-12">
          <div className="grid">
            <div className="lg:col-9 md:col-9 sm:col-12 md:col-offset-2">
              <h6 className="text-white fs-27 font-normal mb-5 mt-2">
                {item.description}
              </h6>
              <h4 className="mb-0 fs-21 font-normal thm-yellow">{item.name}</h4>
              <h5 className="my-3 fs-17 font-normal">{item.desig}</h5>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="card">
      <Carousel
        value={sliderdata}
        numVisible={1}
        numScroll={1}
        responsiveOptions={responsiveOptions}
        itemTemplate={productTemplate}
        showIndicators={false}
        showNavigators={false}
        autoplayInterval={5000}
      />
    </div>
  );
};

import { MainSlider } from "component/MainSlider";
import { InnerBanner } from "container/InnerpageBanner";
import { ArrowButton } from "molecules/ArrowButton";
import { Card } from "primereact/card";
import { BigImgBox } from "molecules/BigImgBox";
import { Crumbs } from "molecules/Breadcrumbs";
import { DetailBox } from "molecules/DetailBox";
import { MidTitle } from "molecules/MidTitle";
import { SectionBorder } from "molecules/SectionBorder";
import { TitleHeading } from "molecules/TitleHeading";
import React from "react";

const About = () => {
  const sliderdata = [
    {
      title: "Amit Gupta",
      description:
        "Quantum is driven by its Vision statement: “To elevate the professional standards of the Indian realty sector by creating projects that deliver the best value and experience” Quantum imb...",
      // image: "media/home_slider/blog-1-400x248 1.png",
      video: {
        video_poster: "media/home_slider/blog-1-400x248 1.png",
        video_url: "https://www.taxmann.com/emailer/images/FEMA.mp4",
      },
    },
    {
      title: "Amit Tindwani",
      description:
        "Quantum is driven by its Vision statement: “To elevate the professional standards of the Indian realty sector by creating projects that deliver the best value and experience” Quantum imb...",
      image: "media/home_slider/blog-1-400x248 1 (1).png",
    },
    {
      title: "Udai Goyal",
      description:
        "Quantum is driven by its Vision statement: “To elevate the professional standards of the Indian realty sector by creating projects that deliver the best value and experience” Quantum imb...",
      image: "media/home_slider/blog-1-400x248 1.png",
    },
    {
      title: "Amit Gupta",
      description:
        "Quantum is driven by its Vision statement: “To elevate the professional standards of the Indian realty sector by creating projects that deliver the best value and experience” Quantum imb...",
      image: "media/home_slider/blog-1-400x248 1 (2).png",
    },
  ];
  return (
    <>
      <Crumbs />
      <InnerBanner
        bannertext="Lorem Ipsum is simply dummy text of the printing and typesetting in..."
        innertitle="About Quantum"
      />
      <section className="section-padding">
        <div className="container">
          <div className="grid section-title">
            <div className="lg:col-4 md:col-5 sm:col-12">
              <TitleHeading title="Our Journey" className="mt-0 mb-3" />
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
                      buttonText="Our History"
                      bgColor="#CDC08B"
                      textColor="#000000"
                      url="/"
                      className="ml-0"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-8 md:col-12 sm:col-12 lg:col-offset-4 mt-4">
              <BigImgBox imgpath="media/about_banner.png" />
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <SectionBorder className="border-black-alpha-80" />
      </div>

      <section className="section-padding">
        <div className="container">
          <div className="grid section-title">
            <div className="lg:col-4 md:col-3 sm:col-12">
              <TitleHeading
                title="Our Purpose & Values"
                className="mt-0 mb-3"
              />
            </div>
            <div className="lg:col-5 md:col-5 sm:col-12">
              <DetailBox
                details="Quantum is driven by its Vision statement: “To elevate the professional standards of the Indian realty sector by creating projects that deliver the best value and experience” Quantum imb  the professional standards of the Indian realty sector by 
"
                className="four-line-text text-justify mt-0 mb-3"
              />
            </div>
            <div className="lg:col-3 md:col-4 sm:col-12 ">
              <div className="flex justify-content-end">
                <ArrowButton
                  width="170"
                  buttonText="Life At Quantum"
                  bgColor="#CDC08B"
                  textColor="#000000"
                  url="/"
                  className="ml-0"
                />
              </div>
            </div>
          </div>
          <div className="grid">
            <div className="lg:col-5 md:col-5 sm:col-12 lg:col-offset-4 mt-4">
              <hr className="border-red-200" />
              <div className="grid mt-4">
                <div className="lg:col-12 md:col-12 sm:col-12">
                  <Card className=" thmbg-nvblue">
                    <DetailBox
                      className="m-0 text-white"
                      details="Quantum is driven by its Vision statement: “To elevate the professional standards of the Indian realty sector by creating projects that deliver the best value and experience”"
                    />
                  </Card>
                </div>
                <div className="lg:col-6 md:col-12 sm:col-12">
                  <Card className="thmbg-nvblue ">
                    <DetailBox
                      className="m-0 text-white"
                      details="Quantum is driven by its Vision statement: “To elevate the professional standards of the Indian realty sector by creating projects that deliver the best value and experience”"
                    />
                  </Card>
                </div>
                <div className="lg:col-6 md:col-12 sm:col-12">
                  <Card className="thmbg-nvblue">
                    <DetailBox
                      className="m-0 text-white"
                      details="Quantum is driven by its Vision statement: “To elevate the professional standards of the Indian realty sector by creating projects that deliver the best value and experience”"
                    />
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <SectionBorder className="border-black-alpha-80" />
      </div>

      <section className="section-padding">
        <div className="container">
          <div className="grid section-title">
            <div className="lg:col-4 md:col-3 sm:col-12">
              <TitleHeading title="Hear it From Them" className="mt-0 mb-3" />
            </div>
            <div className="lg:col-5 md:col-4 sm:col-12">
              <DetailBox
                details="para positioning Quantum as a pioneer in its services and THE place for growth in the same field"
                className="four-line-text text-justify mt-0 mb-3"
              />
            </div>
            <div className="lg:col-3 md:col-3 sm:col-12 ">
              <div className="flex justify-content-end">
                <ArrowButton
                  width="350"
                  buttonText="Explore Job Opportunities"
                  bgColor="#CDC08B"
                  textColor="#000000"
                  url="/"
                  className="ml-0"
                />
              </div>
            </div>
          </div>
          <div className="grid">
            <div className="lg:col-12 md:col-12 sm:col-12 mt-4">
              <MainSlider data={sliderdata} titlecss="text-center" />
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <SectionBorder className="border-black-alpha-80" />
      </div>
      <section className="section-padding">
        <div className="container">
          <div className="grid section-title">
            <div className="lg:col-4 md:col-3 sm:col-12">
              <TitleHeading title="Our Presence" className="mt-0 mb-3" />
            </div>

            <div className="lg:col-8 md:col-8 sm:col-12 ">
              <div className="flex justify-content-end">
                <ArrowButton
                  width="350"
                  buttonText="Contact Us"
                  bgColor="#CDC08B"
                  textColor="#000000"
                  url="/"
                  className="ml-0"
                />
              </div>
            </div>
          </div>
          <div className="grid mt-6">
            <div className="lg:col-3 md:col-6 sm:col-12 ">
              <img src={"media/map-img.png"} alt="" className="img-fluid" />
              <MidTitle
                text="Mumbai"
                className="text-center text-2xl font-medium mt-2 mb-0"
              />
            </div>
            <div className="lg:col-3 md:col-6 sm:col-12 ">
              <img src={"media/map-img.png"} alt="" className="img-fluid" />
              <MidTitle
                text="Pune"
                className="text-center text-2xl font-medium mt-2 mb-0"
              />
            </div>
            <div className="lg:col-3 md:col-6 sm:col-12 ">
              <img src={"media/map-img.png"} alt="" className="img-fluid" />
              <MidTitle
                text="Bangalore"
                className="text-center text-2xl font-medium mt-2 mb-0"
              />
            </div>
            <div className="lg:col-3 md:col-6 sm:col-12 ">
              <img src={"media/map-img.png"} alt="" className="img-fluid" />
              <MidTitle
                text="NCR"
                className="text-center text-2xl font-medium mt-2 mb-0"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

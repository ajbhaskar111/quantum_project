import React, { useEffect } from "react";
import { useSelector, RootStateOrAny } from "react-redux";
import { HomeSlider } from "../../component/HomeSlider";
import { TextVideoSection } from "../../container/TextVideoSection";
import { TitleHeading } from "../../molecules/TitleHeading";
import { ArrowListing } from "../../molecules/ArrowListing";
import Slider1 from "./Slider1";
import Slider2 from "./Slider2";
import { DetailBox } from "molecules/DetailBox";
import { ArrowButton } from "molecules/ArrowButton";
import { SmallHadding } from "molecules/SmallHeadding";
import { SectionBorder } from "molecules/SectionBorder";
import { MainSlider } from "component/MainSlider";
import { MidTitle } from "molecules/MidTitle";
import PeopleSlider from "pages/OurPeople/PeopleSlider";
import { ButtonSlider } from "component/ButtonSlider";

const Home = () => {
  const { homeSlider } = useSelector(
    (state: RootStateOrAny) => state.dashboard
  );

  useEffect(() => {
    console.log("homeSlider", homeSlider);
  }, [homeSlider]);

  const listindata = [
    {
      listtitle: "3 Billion sqft",
      listdetail: "Area ",
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
  const listindata2 = [
    {
      listtitle: "Life At Quantum",
      listdetail:
        "Quantum is driven by its Vision statement: “To elevate the professional standards of the India",
      listlink: "www.google.com",
    },
    {
      listtitle: "Current Job Postings",
      listdetail:
        "Quantum is driven by its Vision statement: “To elevate the professional standards of the India",
      listlink: "www.google.com",
    },
  ];
  const inshightdata = [
    {
      title: "Lorem Ipsum is simply dummy text of the printing and...",
      subtitle: "Case Study",
      description:
        "Quantum is driven by its Vision statement: “To elevate the professional standards of the Indian realty sector by creating projects that deliver the best value and experience” Quantum imb...",
      image: "media/home_slider/blog-1-400x248 1.png",
    },
    {
      title: "Lorem Ipsum is simply dummy text of the printing and...",
      subtitle: "Case Study",
      description:
        "Quantum is driven by its Vision statement: “To elevate the professional standards of the Indian realty sector by creating projects that deliver the best value and experience” Quantum imb...",
      image: "media/home_slider/blog-1-400x248 1 (1).png",
    },
    {
      title: "Lorem Ipsum is simply dummy text of the printing and...",
      subtitle: "Case Study",
      description:
        "Quantum is driven by its Vision statement: “To elevate the professional standards of the Indian realty sector by creating projects that deliver the best value and experience” Quantum imb...",
      image: "media/home_slider/blog-1-400x248 1.png",
    },
    {
      title: "Lorem Ipsum is simply dummy text of the printing and...",
      subtitle: "Case Study",
      description:
        "Quantum is driven by its Vision statement: “To elevate the professional standards of the Indian realty sector by creating projects that deliver the best value and experience” Quantum imb...",
      image: "media/home_slider/blog-1-400x248 1 (2).png",
    },
    {
      title: "Lorem Ipsum is simply dummy text of the printing and...",
      subtitle: "Case Study",
      description:
        "Quantum is driven by its Vision statement: “To elevate the professional standards of the Indian realty sector by creating projects that deliver the best value and experience” Quantum imb...",
      image: "media/home_slider/blog-1-400x248 1 (1).png",
    },
    {
      title: "Lorem Ipsum is simply dummy text of the printing and...",
      subtitle: "Case Study",
      description:
        "Quantum is driven by its Vision statement: “To elevate the professional standards of the Indian realty sector by creating projects that deliver the best value and experience” Quantum imb...",
      image: "media/home_slider/blog-1-400x248 1.png",
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
      <SectionBorder />
      <div className="container"></div>
      <section className="map_sction section-padding">
        <div className="container">
          <div className="grid align-items-center">
            <div className="lg:col-5 md:col-5 sm:col-12">
              <div className="section-title mb-5">
                <TitleHeading title="Milestone History" className="m-0" />
              </div>
              <ArrowListing data={listindata} className="map-label-listing" />
            </div>
            <div className="lg:col-7 md:col-7 sm:col-12 md:pl-6 flex justify-content-end">
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
        {/* <Slider2 /> */}
        <div className="container">
          <div className="grid section-title align-items-center">
            <div className="lg:col-9 md:col-8 sm:col-12">
              <TitleHeading title="Quantum Inshight" className="mt-0 mb-3" />
            </div>

            <div className="lg:col-3 md:col-4 sm:col-12 ">
              <div className="flex justify-content-end">
                <ArrowButton
                  width="170"
                  buttonText="View All"
                  bgColor="#CDC08B"
                  textColor="#000000"
                  url="/"
                  className="ml-0"
                />
              </div>
            </div>
          </div>
          <div className="grid mt-4">
            {inshightdata.map((item, index) => (
              <div className="lg:col-4 md:col-6 sm:col-12 mb-4" key={index}>
                <img
                  src={item.image}
                  //alt={product.name}
                  className="w-full"
                />
                <SmallHadding text={item.title} className="mb-2" />
                <MidTitle text={item.subtitle} />
                <DetailBox details={item.description} />
                <div className="border-bottom-1 border-red-400"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid  align-items-center">
            <div className="lg:col-5 md:col-12 sm:col-12">
              <TitleHeading title="Our Completed Projects" className="mb-2" />
              <DetailBox
                details="Quantum is driven by its Vision statement: “To elevate the professional standards of the Indian realty sector by creating projects that deliver the best value and experience” Quantum imb...
"
                className="my-5 "
              />
              <ArrowButton
                width="170"
                buttonText="View all"
                bgColor="#CDC08B"
                textColor="#000000"
                url="/"
              />
            </div>
            <div className="lg:col-7 md:col-12 sm:col-12">
              <div className="grid lg:pl-8">
                <div className="lg:col-4 md:col-3 sm:col-6 mb-3">
                  <a href="/" className="no-underline text-black-alpha-90">
                    <div className="listing-imgbox m-auto">
                      <img
                        src="media/project/Residential.png"
                        alt=""
                        srcset=""
                        className="w-full"
                      />
                    </div>

                    <SmallHadding
                      text="Residential"
                      className="text-center my-1"
                    />
                  </a>
                </div>
                <div className="lg:col-4 md:col-3 sm:col-6 mb-4">
                  <a href="/" className="no-underline text-black-alpha-90">
                    <div className="listing-imgbox m-auto">
                      <img
                        src="media/project/Commercial.png"
                        alt=""
                        srcset=""
                        className="w-full"
                      />
                    </div>
                    <SmallHadding
                      text="Commercial"
                      className="text-center my-1"
                    />
                  </a>
                </div>
                <div className="lg:col-4 md:col-3 sm:col-6 mb-4">
                  <a href="/" className="no-underline text-black-alpha-90">
                    <div className="listing-imgbox m-auto">
                      <img
                        src="media/project/Industrial.png"
                        alt=""
                        srcset=""
                        className="w-full"
                      />
                    </div>
                    <SmallHadding
                      text="Industrial & Logistics"
                      className="text-center my-1"
                    />
                  </a>
                </div>
                <div className="lg:col-4 md:col-3 sm:col-6">
                  <a href="/" className="no-underline text-black-alpha-90">
                    <div className="listing-imgbox m-auto">
                      <img
                        src="media/project/Retail.png"
                        alt=""
                        srcset=""
                        className="w-full"
                      />
                    </div>
                    <SmallHadding text="Retail" className="text-center my-1" />
                  </a>
                </div>
                <div className="lg:col-4 md:col-3 sm:col-6">
                  <a href="/" className="no-underline text-black-alpha-90">
                    <div className="listing-imgbox m-auto">
                      <img
                        src="media/project/Hospitality.png"
                        alt=""
                        srcset=""
                        className="w-full"
                      />
                    </div>
                    <SmallHadding
                      text="Hospitality"
                      className="text-center my-1"
                    />
                  </a>
                </div>
                <div className="lg:col-4 md:col-3 sm:col-6 ">
                  <a href="/" className="no-underline text-black-alpha-90">
                    <div className="listing-imgbox m-auto">
                      <img
                        src="media/project/Townships.png"
                        alt=""
                        srcset=""
                        className="w-full"
                      />
                    </div>
                    <SmallHadding
                      text="Townships"
                      className="text-center my-1"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding">
        <div className="container">
          <div className="grid section-title">
            <div className="lg:col-4 md:col-3 sm:col-12">
              <TitleHeading title="Careers" className="mt-0 mb-3" />
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
                  buttonText="View Careers"
                  bgColor="#CDC08B"
                  textColor="#000000"
                  url="/"
                  className="ml-0"
                />
              </div>
            </div>
          </div>
          <div className="grid">
            <div className="lg:col-5 md:col-6 sm:col-12 lg:col-offset-4">
              <SmallHadding text="Related Content" className="text-3xl" />

              <ArrowListing data={listindata2} />
              <ArrowButton
                width="170"
                buttonText="View Employment Opportunities"
                bgColor="#CDC08B"
                textColor="#000000"
                url="/"
              />
            </div>
          </div>

          <div className="grid mt-4">
            <ButtonSlider />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

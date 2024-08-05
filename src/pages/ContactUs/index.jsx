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
import { Image } from "primereact/image";

const ContactUs = () => {
  let arrayItems = [
    {
      title: "Investment Advisory",
      peoples: [
        {
          name: "Amit Tindwani",
          email: "amit@123gmail.com",
        },
        {
          name: "Amit Tindwani",
          email: "amit@123gmail.com",
        },
      ],
      topText: "",
      bottomText:
        "Lorem Ipsum is simply dummy text of the printing and typesetting",
    },
    {
      title: "Investment Advisory",
      peoples: [
        {
          name: "Amit Tindwani",
          email: "amit@123gmail.com",
        },
        {
          name: "Amit Tindwani",
          email: "amit@123gmail.com",
        },
      ],
      topText:
        "Lorem Ipsum is simply dummy text of the printing and typesetting",
      bottomText: "",
    },
    {
      title: "Investment Advisory",
      peoples: [
        {
          name: "Amit Tindwani",
          email: "amit@123gmail.com",
        },
        {
          name: "Amit Tindwani",
          email: "amit@123gmail.com",
        },
      ],
      topText: "",
      bottomText:
        "Lorem Ipsum is simply dummy text of the printing and typesetting",
    },
    {
      title: "Investment Advisory",
      peoples: [
        {
          name: "Amit Tindwani",
          email: "amit@123gmail.com",
        },
        {
          name: "Amit Tindwani",
          email: "amit@123gmail.com",
        },
      ],
      topText:
        "Lorem Ipsum is simply dummy text of the printing and typesetting",
      bottomText: "",
    },
  ];
  return (
    <>
      <Crumbs />
      <section>
        <div className="container">
          <div className="grid section-title">
            <div className="lg:col-4 md:col-3 sm:col-12">
              <TitleHeading title="Contact-Us" className="mt-0 mb-3" />
            </div>
          </div>
          <div
            className="my-5 border-top-1 border-bottom-1 py-5"
            style={{ borderColor: "#C82027" }}
          >
            <div className="w-auto" style={{ backgroundColor: "#4E6766" }}>
              <div className="grid p-5">
                <div className="col-6 text-white flex align-content-center flex-wrap">
                  <div className="flex align-content-center flex-wrap flex-column">
                    <div className="flex align-items-center mb-4 text-3xl">
                      Quantum Realty Headquarters
                    </div>
                    <div className="flex align-items-center text-base mb-4">
                      A-412A, Boomerang Building, Chandivali, Andheri East,
                      Mumbai, Maharashtra 400072
                    </div>
                    <div className="flex align-items-center text-sm">
                      <i className="pi pi-phone mr-2"></i> 022 6758 1700
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <Image
                    src="media/Rectangle 33.png"
                    alt="Image"
                    width="100%"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          {arrayItems &&
            arrayItems.map((item) => {
              return (
                <>
                  <div className="grid mb-5 border-bottom-1 pb-5">
                    <div className="col-6 text-center text-2xl">
                      {item?.title}
                    </div>
                    <div className="col-6 text-base">
                      {item?.topText}
                      {item?.peoples.map((p) => {
                        return (
                          <div className="mb-4">
                            <p className="mb-1">{p?.name}</p>
                            <p
                              className="text-sm mt-2"
                              style={{ color: "#C82027" }}
                            >
                              {p?.email}
                            </p>
                          </div>
                        );
                      })}
                      {item?.bottomText}
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </section>
    </>
  );
};

export default ContactUs;

import { Crumbs } from "molecules/Breadcrumbs";

import { TitleHeading } from "molecules/TitleHeading";
import React from "react";
import { Image } from "primereact/image";
import { SmallHadding } from "molecules/SmallHeadding";
import { DetailBox } from "molecules/DetailBox";

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
          <div className="my-5 border-top-1 border-bottom-1 py-3 border-red-600 flex">
            <div style={{ backgroundColor: "#4E6766" }} className="w-full">
              <div className="grid p-5 align-items-center">
                <div className="lg:col-5 md:col-6 sm:col-12 text-white">
                  <SmallHadding
                    text="Quantum Realty Headquarters"
                    className="mb-4 text-4xl eb-garamond-font"
                  />

                  <div className="flex align-items-center text-base mb-4">
                    <DetailBox
                      details=" A-412A, Boomerang Building, Chandivali, Andheri East,
                      Mumbai, Maharashtra 400072"
                      className="text-white w-19rem"
                    />
                  </div>
                  <div className="flex align-items-center text-sm">
                    <i className="pi pi-phone mr-2"></i>
                    <span className="text-xl">022 6758 1700</span>
                  </div>
                </div>
                <div className="lg:col-7 md:col-6 sm:col-12">
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
        <div className="container last-border-none">
          {arrayItems &&
            arrayItems.map((item) => {
              return (
                <>
                  <div className="grid mb-5 border-bottom-1 pb-5 ">
                    <div className="col-6  text-xl">
                      <TitleHeading title={item?.title} />
                    </div>
                    <div className="col-6">
                      <DetailBox details={item?.topText} />
                      {item?.peoples.map((p) => {
                        return (
                          <div className="mb-4">
                            <p className="mb-1 text-2xl text-black-alpha-90">
                              {p?.name}
                            </p>
                            <p
                              className="fs-17 mt-2 font-medium"
                              style={{ color: "#C82027" }}
                            >
                              {p?.email}
                            </p>
                          </div>
                        );
                      })}
                      <DetailBox
                        details={item?.bottomText}
                        className="font-medium"
                      />
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

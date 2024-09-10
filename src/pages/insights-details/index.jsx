import { MainSlider } from "component/MainSlider";
import { InnerBanner } from "container/InnerpageBanner";
import { Crumbs } from "molecules/Breadcrumbs";
import { DetailBox } from "molecules/DetailBox";
import { TitleHeading } from "molecules/TitleHeading";
import { TestimonialSection } from "pages/communityImpact/testimonial";
import React from "react";
import ItemSlider from "./itemSlider";
import { SectionBorder } from "molecules/SectionBorder";
import { SmallHadding } from "molecules/SmallHeadding";

export const InsightsDetails = () => {
  return (
    <>
      <Crumbs />
      <section className="">
        <div className="container">
          <div className="grid">
            <div className="lg:col-12 md:col-12 sm:col-12">
              <div className="grid align-items-center">
                <div className="lg:col-8 md:col-7 sm:col-12">
                  <TitleHeading title="Insights Heading" className="m-0" />
                </div>
                <div className="lg:col-4 md:col-5 sm:col-12 text-right">
                  <p className="my-0">Auguest 09,24</p>
                </div>
              </div>
            </div>
            <div className="lg:col-12 md:col-12 sm:col-12">
              <img
                src="media/home_slider/blog-1-400x248 1 (4).png"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding">
        <div className="container">
          <div className="grid">
            <div className="lg:col-4 md:col-5 sm:col-12">
              <h3 className="font-normal">Share</h3>
              <ul className="listing line">
                <li>
                  <a
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black-alpha-90"
                  >
                    <i className="pi pi-facebook  text-2xl"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black-alpha-90 "
                  >
                    <i className="pi pi-envelope text-2xl"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black-alpha-90"
                  >
                    <i className="pi pi-twitter  text-2xl"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black-alpha-90  "
                  >
                    <i className="pi pi-link text-2xl"></i>
                  </a>
                </li>
              </ul>
              <div className="author-box">
                <h4 className="mb-1">Author</h4>
                <h5 className="my-1 text-red-600">Paras Pandit</h5>
              </div>
            </div>
            <div className="lg:col-8 md:col-7 sm:col-12">
              <div className="grid">
                <div className="lg:col-12 md:col-12 sm:col-12">
                  <DetailBox details="Quantum is driven by its Vision statement: “To elevate the professional standards of the Indian realty sector by creating projects that deliver the best value and experience” Quantum imb the professional standards of the Indian realty sector by" />
                  <DetailBox details="Quantum is driven by its Vision statement: “To elevate the professional standards of the Indian realty sector by creating projects that deliver the best value and experience” Quantum imb the professional standards of the Indian realty sector by" />
                  <DetailBox details="Quantum is driven by its Vision statement: “To elevate the professional standards of the Indian realty sector by creating projects that deliver the best value and experience” Quantum imb the professional standards of the Indian realty sector by" />
                </div>
                <div className="lg:col-12 md:col-12 sm:col-12">
                  <h3>Key Features</h3>
                  <ol className=" bulit-listing pl-3">
                    <li className="mb-3 fs-17">
                      To elevate the professional standards of the Indian
                    </li>
                    <li className="mb-3 fs-17">
                      To elevate the professional standards of the Indian
                    </li>
                    <li className="mb-3 fs-17">
                      To elevate the professional standards of the Indian
                    </li>
                    <li className=" fs-17">
                      To elevate the professional standards of the Indian
                    </li>
                  </ol>
                  <div className="rounded-btn">
                    <a
                      href="#"
                      className="btn border-round-3xl border-2 px-3 py-1 border-red-500 text-red-500 no-underline text-2 mt-3 inline-block"
                    >
                      <i className="pi pi-download mr-2"> </i>Download
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <SectionBorder />
      </div>
      <section className="section-padding">
        <div className="container">
          <div className="gird">
            <div className="lg:col-12 md:col-12 sm:col-12">
              <SmallHadding
                text="Explore More "
                className="mt-0 text-red-600 text-center"
              />
            </div>
          </div>
          <ItemSlider />
        </div>
      </section>
    </>
  );
};

import React from "react";
import { ArrowLink } from "../../molecules/ArrowLink";

export const Footer = () => {
  return (
    <footer className="footer-secition">
      <div className="top-footer thmbg-nvblue py-4 text-white">
        <div className="container">
          <div className="grid">
            <div className="col-12">
              <h2 className="section-title mb-3 mt-0">
                Explore Real-Estate solutions for...
              </h2>
            </div>
            <div className="col-12">
              <div className="grid  align-items-center">
                <div className="lg:col-4 md:col-4 sm:col-12 border-right-1">
                  <h3 className="text-2xl font-normal mb-4 mt-2 ">Investors</h3>
                  <ArrowLink url="" />
                </div>
                <div className="lg:col-4 md:col-4 sm:col-12 border-right-1 pl-4">
                  <h3 className="text-2xl font-normal mb-4 mt-2">Developers</h3>
                  <ArrowLink url="" />
                </div>
                <div className="lg:col-4 md:col-4 sm:col-12 pl-4">
                  <h3 className="text-2xl font-normal mb-4 mt-2">
                    Hovering societies & others
                  </h3>
                  <ArrowLink url="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="borer-bottom-1 border-white thmbg-gray text-white ">
        <div className="container">
          <div className="grid lg:py-7 md:py-5 sm:py-5">
            <div className="lg:col-4 md:col-4 sm:col-12">
              <h3 className="fs-27 font-normal mb-5 pb-3 mt-2 border-bottom-1">
                Social Links
              </h3>
              <ArrowLink url="" iconurl="media/linked_in.png" />
              <br />
              <ArrowLink url="" iconName="pi-youtube" />
            </div>
            <div className="lg:col-4 md:col-4 sm:col-12">
              <h3 className="fs-27 font-normal mb-5 pb-3 mt-2 border-bottom-1">
                Explore Quantum
              </h3>
              <ul className="listing">
                <li className="mb-3">
                  <a
                    href="/"
                    className="text-white no-underline fs-17 font-normal"
                  >
                    About Us
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="/"
                    className="text-white no-underline fs-17 font-normal"
                  >
                    Our Services
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="/"
                    className="text-white no-underline fs-17 font-normal"
                  >
                    Our Clients
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-white no-underline fs-17 font-normal"
                  >
                    Our Projects
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:col-4 md:col-4 sm:col-12">
              <h3 className="fs-27 font-normal mb-5 pb-3 mt-2 border-bottom-1">
                More Information
              </h3>
              <ul className="listing">
                <li className="mb-3">
                  <a
                    href="/"
                    className="text-white no-underline fs-17 font-normal"
                  >
                    Community Impact
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="/"
                    className="text-white no-underline fs-17 font-normal"
                  >
                    Careers
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="/"
                    className="text-white no-underline fs-17 font-normal"
                  >
                    Blogs
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copy-right-section border-top-1">
          <div className="container">
            <div className="grid align-items-center">
              <div className="lg:col-3 md:col-4 sm:col-12">
                <img src="media/qauntumn-white.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

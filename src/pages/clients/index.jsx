import { InnerBanner } from "container/InnerpageBanner";
import { Crumbs } from "molecules/Breadcrumbs";
import { TitleHeading } from "molecules/TitleHeading";
import React from "react";
import { Accordion, AccordionTab } from "primereact/accordion";

export const Clients = () => {
  const clientdata = [
    {
      id: 1,
      client_name: "CGI",
      category: "",
      image_path: "/media/home_slider/client_box.png",
    },
    {
      id: 2,
      client_name: "CGI",
      category: "ARC",
      image_path: "/media/home_slider/client_box-1.png",
    },
    {
      id: 3,
      client_name: "CGI",
      category: "ARC",
      image_path: "/media/home_slider/3_1.png",
    },
    {
      id: 4,
      client_name: "CGI",
      category: "ARC",
      image_path: "/media/home_slider/4_1.png",
    },
    {
      id: 1,
      client_name: "CGI",
      category: "",
      image_path: "/media/home_slider/client_box.png",
    },
    {
      id: 2,
      client_name: "CGI",
      category: "Banks",
      image_path: "/media/home_slider/client_box-1.png",
    },
    {
      id: 3,
      client_name: "CGI",
      category: "Banks",
      image_path: "/media/home_slider/3_1.png",
    },
    {
      id: 4,
      client_name: "CGI",
      category: "Banks",
      image_path: "/media/home_slider/4_1.png",
    },
  ];
  return (
    <>
      <Crumbs />
      <InnerBanner
        bannertext="Lorem Ipsum is simply dummy text of the printing and typesetting in..."
        innertitle="Clients"
      />
      <section className="section-padding">
        <div className="container">
          <div className="grid">
            <div className="lg:col-12 md:col-12 sm:col-12">
              <TitleHeading
                title="Find People & Office Globally to Help Your Business Thrive"
                className="mt-0"
              />
            </div>
            <div className="lg:col-12 md:col-12 sm:col-12 mt-5">
              <Accordion multiple activeIndex={[0]}>
                <AccordionTab header="Sovereign Wealth Funds & International Development Institutions">
                  <div className="grid mb-5">
                    {clientdata.map((item, index) => (
                      <div
                        className="lg:col-3 md:col-6 sm:col-12 mb:mb-3"
                        key={index}
                      >
                        <div className="card">
                          <img
                            src={item.image_path}
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionTab>
                <AccordionTab header="Global AMCs, PE and Institutional Developers">
                  <div className="grid mb-5">
                    {clientdata.map((item, index) => (
                      <div
                        className="lg:col-3 md:col-6 sm:col-12 mb:mb-3"
                        key={index}
                      >
                        <div className="card">
                          <img
                            src={item.image_path}
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionTab>
                <AccordionTab header="Domestic Investment Managers & AMC's">
                  <div className="grid mb-5">
                    {clientdata.map((item, index) => (
                      <div
                        className="lg:col-3 md:col-6 sm:col-12 mb:mb-3"
                        key={index}
                      >
                        <div className="card">
                          <img
                            src={item.image_path}
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionTab>
                <AccordionTab header="Financial Institutions:">
                  <div className="grid mb-5">
                    <div className="lg:col-12 md:col-12 sm:col-12">
                      <h6 className="fs-21 font-normal text-black-alpha-90 border-bottom-1 pb-2 relative small-red-line mt-0">
                        ARC
                      </h6>
                    </div>
                    {clientdata.map((item, index) => (
                      <div
                        className="lg:col-3 md:col-6 sm:col-12 mb:mb-3"
                        key={index}
                      >
                        <div className="card">
                          <img
                            src={item.image_path}
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionTab>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

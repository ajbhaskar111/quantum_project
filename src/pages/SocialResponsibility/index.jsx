import { InnerBanner } from "container/InnerpageBanner";
import { Crumbs } from "molecules/Breadcrumbs";
import { TitleHeading } from "molecules/TitleHeading";
import React from "react";
import { Accordion, AccordionTab } from "primereact/accordion";

export const SocialResponsibility = () => {
  return (
    <>
      <Crumbs />
      <InnerBanner
        bannertext="Lorem Ipsum is simply dummy text of the printing and typesetting in..."
        innertitle="Social Responsibility"
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
                <AccordionTab header="Animal Welfare">
                  <div className="grid mb-5">
                    <div className="lg:col-4 md:col-4 sm:col-12 ">
                      <div className="card bg-transparent border-bottom-1">
                        <img
                          src="/media/social_responsibility/social-img-1.png"
                          alt=""
                          className="img-fluid"
                        />
                        <h6 className="fs-21 fw-500 my-3 px-2 text-black-alpha-90 ">
                          Avance-business-hub
                        </h6>
                      </div>
                    </div>
                    <div className="lg:col-4 md:col-4 sm:col-12">
                      <div className="card bg-transparent border-bottom-1">
                        <img
                          src="/media/social_responsibility/social-img-2.png"
                          alt=""
                          className="img-fluid"
                        />
                        <h6 className="fs-21 fw-500 my-3 px-2 text-black-alpha-90 ">
                          Greens
                        </h6>
                      </div>
                    </div>
                    <div className="lg:col-4 md:col-4 sm:col-12">
                      <div className="card bg-transparent border-bottom-1">
                        <img
                          src="/media/social_responsibility/social-img-3.png"
                          alt=""
                          className="img-fluid"
                        />
                        <h6 className="fs-21 fw-500 my-3 px-2 text-black-alpha-90 ">
                          The Hermitage & The Hive
                        </h6>
                      </div>
                    </div>
                  </div>
                </AccordionTab>
                <AccordionTab header="Empowerment">
                  <div className="grid mb-5">
                    <div className="lg:col-4 md:col-4 sm:col-12 ">
                      <div className="card bg-transparent border-bottom-1">
                        <img
                          src="/media/social_responsibility/social-img-1.png"
                          alt=""
                          className="img-fluid"
                        />
                        <h6 className="fs-21 fw-500 my-3 px-2 text-black-alpha-90 ">
                          Avance-business-hub
                        </h6>
                      </div>
                    </div>
                    <div className="lg:col-4 md:col-4 sm:col-12">
                      <div className="card bg-transparent border-bottom-1">
                        <img
                          src="/media/social_responsibility/social-img-2.png"
                          alt=""
                          className="img-fluid"
                        />
                        <h6 className="fs-21 fw-500 my-3 px-2 text-black-alpha-90 ">
                          Greens
                        </h6>
                      </div>
                    </div>
                    <div className="lg:col-4 md:col-4 sm:col-12">
                      <div className="card bg-transparent border-bottom-1">
                        <img
                          src="/media/social_responsibility/social-img-3.png"
                          alt=""
                          className="img-fluid"
                        />
                        <h6 className="fs-21 fw-500 my-3 px-2 text-black-alpha-90 ">
                          The Hermitage & The Hive
                        </h6>
                      </div>
                    </div>
                  </div>
                </AccordionTab>
                <AccordionTab header="Children's Education">
                  <div className="grid mb-5">
                    <div className="lg:col-4 md:col-4 sm:col-12 ">
                      <div className="card bg-transparent border-bottom-1">
                        <img
                          src="/media/social_responsibility/social-img-1.png"
                          alt=""
                          className="img-fluid"
                        />
                        <h6 className="fs-21 fw-500 my-3 px-2 text-black-alpha-90 ">
                          Avance-business-hub
                        </h6>
                      </div>
                    </div>
                    <div className="lg:col-4 md:col-4 sm:col-12">
                      <div className="card bg-transparent border-bottom-1">
                        <img
                          src="/media/social_responsibility/social-img-2.png"
                          alt=""
                          className="img-fluid"
                        />
                        <h6 className="fs-21 fw-500 my-3 px-2 text-black-alpha-90 ">
                          Greens
                        </h6>
                      </div>
                    </div>
                    <div className="lg:col-4 md:col-4 sm:col-12">
                      <div className="card bg-transparent border-bottom-1">
                        <img
                          src="/media/social_responsibility/social-img-3.png"
                          alt=""
                          className="img-fluid"
                        />
                        <h6 className="fs-21 fw-500 my-3 px-2 text-black-alpha-90 ">
                          The Hermitage & The Hive
                        </h6>
                      </div>
                    </div>
                  </div>
                </AccordionTab>
                <AccordionTab header="Social Well-being">
                  <div className="grid mb-5">
                    <div className="lg:col-4 md:col-4 sm:col-12 ">
                      <div className="card bg-transparent border-bottom-1">
                        <img
                          src="/media/social_responsibility/social-img-1.png"
                          alt=""
                          className="img-fluid"
                        />
                        <h6 className="fs-21 fw-500 my-3 px-2 text-black-alpha-90 ">
                          Avance-business-hub
                        </h6>
                      </div>
                    </div>
                    <div className="lg:col-4 md:col-4 sm:col-12">
                      <div className="card bg-transparent border-bottom-1">
                        <img
                          src="/media/social_responsibility/social-img-2.png"
                          alt=""
                          className="img-fluid"
                        />
                        <h6 className="fs-21 fw-500 my-3 px-2 text-black-alpha-90 ">
                          Greens
                        </h6>
                      </div>
                    </div>
                    <div className="lg:col-4 md:col-4 sm:col-12">
                      <div className="card bg-transparent border-bottom-1">
                        <img
                          src="/media/social_responsibility/social-img-3.png"
                          alt=""
                          className="img-fluid"
                        />
                        <h6 className="fs-21 fw-500 my-3 px-2 text-black-alpha-90 ">
                          The Hermitage & The Hive
                        </h6>
                      </div>
                    </div>
                  </div>
                </AccordionTab>
                <AccordionTab header="Service">
                  <div className="grid mb-5">
                    <div className="lg:col-4 md:col-4 sm:col-12 ">
                      <div className="card bg-transparent border-bottom-1">
                        <img
                          src="/media/social_responsibility/social-img-1.png"
                          alt=""
                          className="img-fluid"
                        />
                        <h6 className="fs-21 fw-500 my-3 px-2 text-black-alpha-90 ">
                          Avance-business-hub
                        </h6>
                      </div>
                    </div>
                    <div className="lg:col-4 md:col-4 sm:col-12">
                      <div className="card bg-transparent border-bottom-1">
                        <img
                          src="/media/social_responsibility/social-img-2.png"
                          alt=""
                          className="img-fluid"
                        />
                        <h6 className="fs-21 fw-500 my-3 px-2 text-black-alpha-90 ">
                          Greens
                        </h6>
                      </div>
                    </div>
                    <div className="lg:col-4 md:col-4 sm:col-12">
                      <div className="card bg-transparent border-bottom-1">
                        <img
                          src="/media/social_responsibility/social-img-3.png"
                          alt=""
                          className="img-fluid"
                        />
                        <h6 className="fs-21 fw-500 my-3 px-2 text-black-alpha-90 ">
                          The Hermitage & The Hive
                        </h6>
                      </div>
                    </div>
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

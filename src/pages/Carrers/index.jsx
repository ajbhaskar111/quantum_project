import { Crumbs } from "molecules/Breadcrumbs";
import { TitleHeading } from "molecules/TitleHeading";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { ListBox } from "primereact/listbox";
import { Timeline } from "primereact/timeline";
import React, { useState } from "react";
import styled from "styled-components";
import { MultiSelect } from "primereact/multiselect";
import { InputText } from "primereact/inputtext";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";

const CustDropdown = styled(MultiSelect)`
  border: 1px solid rgb(200, 32, 39);
  background: transparent;
  border-radius: 0;
  font-weight: 500;
`;

const Careers = () => {
  const [selectedStrategies, setSelectedStrategies] = useState(null);
  const strategies = [
    { name: "Real Assets", code: "RA" },
    { name: "Retirement Solutions", code: "RS" },
    { name: "Equity", code: "EQ" },
    { name: "Credit", code: "CR" },
    { name: "Financial Services", code: "FS" },
    { name: "Secondaries", code: "SE" },
  ];

  const jobs = [
    {
      title: "Analyst, Trade Support / Junior Trader...",
      location: "New York, New York",
      role_name: "R240482 Spotlight Job",
      date: "15 / May / 2024",
    },
    {
      title: "Analyst, Trade Support / Junior Trader...",
      location: "New York, New York",
      role_name: "R240482 Spotlight Job",
      date: "15 / May / 2024",
    },
    {
      title: "Analyst, Trade Support / Junior Trader...",
      location: "New York, New York",
      role_name: "R240482 Spotlight Job",
      date: "15 / May / 2024",
    },
    {
      title: "Analyst, Trade Support / Junior Trader...",
      location: "New York, New York",
      role_name: "R240482 Spotlight Job",
      date: "15 / May / 2024",
    },
  ];

  return (
    <>
      <Crumbs />
      <section>
        <div className="container">
          <div className="grid section-title">
            <div className="lg:col-4 md:col-3 sm:col-12">
              <TitleHeading title="Job Search" className="mt-0 mb-3" />
            </div>
          </div>
          <div
            className="my-5 border-top-1 border-bottom-1 py-0"
            style={{ borderColor: "#C82027" }}
          >
            <div className="grid mt-2">
              <div className="lg:col-9 md:col-9 sm:col-12">
                <IconField iconPosition="left">
                  <InputIcon className="pi pi-search"> </InputIcon>
                  <InputText
                    v-model="value1"
                    placeholder="Search for jobs or keywords"
                    className="w-full border-noround pl-6 border-none"
                  />
                </IconField>
              </div>
              <div className="lg:col-3 md:col-3 sm:col-12">
                <Button
                  label="SEARCH"
                  className="w-full border-noround"
                  style={{ backgroundColor: "#C82027" }}
                />
              </div>
            </div>

            <div className="mb-3 mt-2">
              <div className="grid align-items-center">
                <div className="lg:col-3 md:col-6 sm:col-12">
                  <CustDropdown
                    multiple={true}
                    value={selectedStrategies}
                    onChange={(e) => setSelectedStrategies(e.value)}
                    options={strategies}
                    optionLabel="name"
                    placeholder="Location"
                    className="w-full "
                    checkmark={true}
                    highlightOnSelect={false}
                    style={{
                      border: "1px solid rgb(200, 32, 39)",
                      background: "transparant",
                    }}
                  />
                </div>

                <div className="lg:col-3 md:col-6 sm:col-12">
                  <CustDropdown
                    multiple={true}
                    value={selectedStrategies}
                    onChange={(e) => setSelectedStrategies(e.value)}
                    options={strategies}
                    optionLabel="name"
                    placeholder="Time Type"
                    className="w-full "
                    checkmark={true}
                    highlightOnSelect={false}
                    style={{
                      border: "1px solid rgb(200, 32, 39)",
                      background: "transparant",
                    }}
                  />
                </div>

                <div className="lg:col-3 md:col-6 sm:col-12">
                  <CustDropdown
                    multiple={true}
                    value={selectedStrategies}
                    onChange={(e) => setSelectedStrategies(e.value)}
                    options={strategies}
                    optionLabel="name"
                    placeholder="Job Category"
                    className="w-full"
                    checkmark={true}
                    highlightOnSelect={false}
                    style={{
                      border: "1px solid rgb(200, 32, 39)",
                      background: "transparant",
                    }}
                  />
                </div>

                <div className="lg:col-3 md:col-6 sm:col-12">
                  <CustDropdown
                    multiple={true}
                    value={selectedStrategies}
                    onChange={(e) => setSelectedStrategies(e.value)}
                    options={strategies}
                    optionLabel="name"
                    placeholder="More"
                    className="w-full "
                    checkmark={true}
                    highlightOnSelect={false}
                    style={{
                      border: "1px solid rgb(200, 32, 39)",
                      background: "transparant",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="grid nested-grid">
            <div class="col-4">
              <div class="text-left p-3 font-bold text-500 border-right-1">
                {jobs?.length} Jobs Found
              </div>

              {jobs &&
                jobs.map((job) => {
                  return (
                    <div class="text-left p-3 border-1 border-left-none border-bottom-none">
                      <p>{job?.title}</p>
                      <div className="flex align-items-center text-600">
                        <i className="pi pi-map-marker mr-2"></i>
                        <span>{job?.location}</span>
                      </div>
                      <p className="mt-2" style={{ color: "#0D0D0D80" }}>
                        {job?.role_name}
                        <span className="text-sm" style={{ float: "right" }}>
                          {job?.date}
                        </span>
                      </p>
                    </div>
                  );
                })}
            </div>
            <div class="col-8">
              <div class="text-center p-3 h-full">
                <p>Grow your Career at Quantum</p>
                <p style={{color:"#C82027",fontFamily:"EB Garamond"}} className="my-5 uppercase text-5xl">Quantum</p>
                <p className="justify-content-center px-8 lg:w-9 md:w-9 sm:w-full m-auto line-height-3" style={{color:"#1E1E1E"}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud ullamco nisi...
                </p>
                <Button outlined className="py-1 px-3 text-xs mt-3 border-700 bg-white text-600">Read More</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers;

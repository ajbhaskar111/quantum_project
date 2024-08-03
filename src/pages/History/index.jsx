import { Crumbs } from "molecules/Breadcrumbs";
import { TitleHeading } from "molecules/TitleHeading";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { ListBox } from "primereact/listbox";
import { Timeline } from "primereact/timeline";
import React, { useState } from "react";
import styled from "styled-components";

const CustomSpan = styled.span`
  background: transparent;
  padding-top: 0;
  text-transform: uppercase;
  color: #c82027;
  font-weight: 800;
  padding-left: 1rem;
`;

const CustomListBox = styled(ListBox)`
  border: 0;
  border-right: 2px solid #000;
  border-radius: 0;
  margin-top: 1rem;

  .p-listbox-list .p-listbox-item.p-highlight {
    background: #c82027;
    color: #f5f4f1;
  }

  .p-listbox-list {
    padding: 0px;
  }
`;

const CustomTimeline = styled(Timeline)`
  .p-timeline-event-opposite {
    display: none;
  }

  .p-timeline-event-connector {
    display: none;
  }

  .p-timeline-event-content {
    margin-bottom: 4rem;
    .circled-dot {
      width: 10px;
      height: 10px;
      background: #000000;
      border-radius: 50px;
      position: absolute;
      left: 0.2rem;
      top: 0;
    }
  }
`;

const History = () => {
  const [selectedYear, setSelectedYear] = useState({
    label: "2027",
    value: "2027",
  });

  const yearsList = [
    { label: "2027", value: "2027" },
    { label: "2026", value: "2026" },
    { label: "2025", value: "2025" },
    { label: "2024", value: "2024" },
    { label: "2023", value: "2023" },
    { label: "2022", value: "2022" },
    { label: "2021", value: "2021" },
  ];
  const events = [
    {
      id: "2027",
      items: [
        {
          header: "Lorem Ipsum is simply dummy text of the printing and...",
          description:
            "Quantum is driven by its Vision statement: “To elevate the professional standards of the Indian realty sector by creating projects that deliver the best value and experience” Quantum imb...",
          image: "media/home_slider/blog-1-400x248 1 (1).png",
        },
      ],
    },
    {
      id: "2026",
      items: [
        {
          header: "Lorem Ipsum is simply dummy text of the printing and...",
          description:
            "Quantum is driven by its Vision statement: “To elevate the professional standards of the Indian realty sector by creating projects that deliver the best value and experience” Quantum imb...",
          image: "media/home_slider/blog-1-400x248 1.png",
        },
      ],
    },
    {
      id: "2025",
      items: [
        {
          header: "Lorem Ipsum is simply dummy text of the printing and...",
          description:
            "Quantum is driven by its Vision statement: “To elevate the professional standards of the Indian realty sector by creating projects that deliver the best value and experience” Quantum imb...",
          image: "media/home_slider/blog-1-400x248 1 (2).png",
        },
      ],
    },
    {
      id: "2024",
      items: [
        {
          header: "Lorem Ipsum is simply dummy text of the printing and...",
          description:
            "Quantum is driven by its Vision statement: “To elevate the professional standards of the Indian realty sector by creating projects that deliver the best value and experience” Quantum imb...",
          image: "media/home_slider/blog-1-400x248 1 (4).png",
        },
      ],
    },
    {
      id: "2023",
      items: [
        {
          header: "Lorem Ipsum is simply dummy text of the printing and...",
          description:
            "Quantum is driven by its Vision statement: “To elevate the professional standards of the Indian realty sector by creating projects that deliver the best value and experience” Quantum imb...",
        },
        {
          header: "Lorem Ipsum is simply dummy text of the printing and...",
          description:
            "Quantum is driven by its Vision statement: “To elevate the professional standards of the Indian realty sector by creating projects that deliver the best value and experience” Quantum imb...",
        },
      ],
    },
  ];
  const customizedMarker = (item) => {
    return (
      <span className="" style={{ backgroundColor: item.color }}>
        {item?.id}
      </span>
    );
  };

  const customizedContent = (item) => {
    return (
      item &&
      item?.items.map((i, index) => {
        return (
          <div key={index} className="w-8 pl-2 relative">
            <div className="border-left-1 pl-5">
              <div className="circled-dot"></div>
              <h3 className="font-medium mt-0 pt-2">{i?.header}</h3>
              {i?.description && (
                <p className="details-text mt-2 pt-2 border-top-1 border-red-700">
                  {i?.description}
                </p>
              )}
            </div>
            <div className="pl-5">
              {i?.image && (
                <img
                  src={i?.image}
                  alt={i?.name}
                  width={"100%"}
                  className="shadow-1"
                />
              )}
            </div>
          </div>
        );
      })
    );
  };

  return (
    <>
      <Crumbs />
      <section>
        <div className="container">
          <div className="grid section-title">
            <div className="lg:col-4 md:col-3 sm:col-12">
              <TitleHeading title="Quantum History" className="mt-0 mb-3" />
            </div>
          </div>
          <div
            className="my-5 border-top-1 border-bottom-1 py-5"
            style={{ borderColor: "#C82027" }}
          >
            <div className="w-4 m-auto">
              Quantum Projectinfra Pvt Ltd (Quantum) is a Real Estate Advisor
              and Manager for End to End Asset Management. Quantum provides
              services on PAN India basis through its local office presence in
              all major cities.
            </div>
          </div>

          <>
            <div className="grid">
              <div className="col-2">
                <CustomSpan>YEAR</CustomSpan>
                <CustomListBox
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.value)}
                  options={yearsList}
                  optionLabel="label"
                  className="w-full"
                />
              </div>
              <div className="col-7 mt-6">
                <div className="card">
                  <CustomTimeline
                    value={events}
                    opposite={null}
                    //   align="left"
                    className="customized-timeline"
                    marker={customizedMarker}
                    content={customizedContent}
                  />
                </div>
              </div>
            </div>
          </>
        </div>
      </section>
    </>
  );
};

export default History;

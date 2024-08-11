import React, { useState } from "react";
// import { TitleHeading } from "../../molecules/TitleHeading";
// import { ArrowButton } from "../../molecules/ArrowButton";
// import { DetailBox } from "../../molecules/DetailBox";
import { Carousel } from "primereact/carousel";
import { responsiveSliderOptions } from "../../assets/config";
import styled from "styled-components";
import { Paginator } from "primereact/paginator";
import { QuantamVideo } from "container/QuantamVideo";
import { SmallHadding } from "molecules/SmallHeadding";

const CustPaginator = styled(Paginator)`
  .p-paginator-first:not(.p-disabled):not(.p-highlight):hover,
  .p-paginator-prev:not(.p-disabled):not(.p-highlight):hover,
  .p-paginator-next:not(.p-disabled):not(.p-highlight):hover,
  .p-paginator-last:not(.p-disabled):not(.p-highlight):hover {
    color: #000;
  }

  .p-paginator-pages {
    margin: 0 1rem;
  }
  .p-paginator-pages .p-paginator-page.p-highlight {
    background: #010101;
    border-color: #010101;
    color: #fff;
    cursor: default;
  }

  .p-paginator-pages .p-paginator-page {
    border: none;
    border-radius: 50% !important;
    color: #010101;
    float: left;
    font-size: 18px;
    font-weight: 500;
    height: 2pc;
    line-height: 2pc;
    //  margin: 0 1pc 0 0 !important;
    min-width: 2pc;
    padding: 0 !important;
    text-align: center;
    text-decoration: none;
  }

  .p-paginator-pages .p-paginator-page:hover {
    background: #010101;
    color: #fff;
    text-decoration: none;
  }
`;

const ItemTag = styled.div`
  .cust-title {
    font-size: 20px !important;
  }

  .cust-title:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const ButtonSlider = () => {
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(4);
  const [activePage, setActivePage] = useState(0);

  const sliderdata = [
    {
      title: "Amit Tindwani 1",
      video: {
        video_poster: "media/blog-1-400x248 1 (3).png",
        video_url: "https://www.taxmann.com/emailer/images/FEMA.mp4",
      },
    },
    {
      title: "Amit Tindwani 2",
      video: {
        video_poster: "media/blog-1-400x248 1 (3).png",
        video_url: "https://www.taxmann.com/emailer/images/FEMA.mp4",
      },
    },
    {
      title: "Amit Tindwani 3",
      video: {
        video_poster: "media/blog-1-400x248 1 (3).png",
        video_url: "https://www.taxmann.com/emailer/images/FEMA.mp4",
      },
    },
    {
      title: "Amit Tindwani 4",
      video: {
        video_poster: "media/blog-1-400x248 1 (3).png",
        video_url: "https://www.taxmann.com/emailer/images/FEMA.mp4",
      },
    },
    {
      title: "Amit Tindwani 5",
      video: {
        video_poster: "media/blog-1-400x248 1 (3).png",
        video_url: "https://www.taxmann.com/emailer/images/FEMA.mp4",
      },
    },
    {
      title: "Amit Tindwani 6",
      video: {
        video_poster: "media/blog-1-400x248 1 (3).png",
        video_url: "https://www.taxmann.com/emailer/images/FEMA.mp4",
      },
    },
  ];

  const onPageChange = (event) => {
    setFirst(event.first);
    setRows(event.rows);
    setActivePage(event?.page);
  };

  const itemTemplate = (item) => {
    return (
      <ItemTag className="text-justify slider-box">
        {item?.image ? (
          <img src={item?.image} className="w-full" />
        ) : (
          <QuantamVideo item={item} />
        )}

        <SmallHadding
          text={item?.title}
          className="my-2 cust-title font-base font-medium text-center no-underline"
        />
      </ItemTag>
    );
  };

  return (
    <div className="container">
      <Carousel
        value={sliderdata}
        page={activePage}
        numVisible={4}
        numScroll={1}
        responsiveOptions={responsiveSliderOptions}
        itemTemplate={itemTemplate}
        showIndicators={false}
        showNavigators={false}
        circular={true}
        style={{ backgroundColor: "transparent" }}
      />

      <div className="flex justify-content-end flex-wrap">
        <CustPaginator
          first={first}
          rows={rows}
          totalRecords={10}
          rowsPerPageOptions={[1]}
          onPageChange={onPageChange}
          prevPageLinkIcon={
            <i
              className="pi pi-arrow-circle-left"
              style={{ fontSize: "2rem" }}
            ></i>
          }
          nextPageLinkIcon={
            <i
              className="pi pi-arrow-circle-right"
              style={{ fontSize: "2rem" }}
            ></i>
          }
          template={{ layout: "PrevPageLink CurrentPageReport NextPageLink" }}
        />
      </div>
    </div>
  );
};

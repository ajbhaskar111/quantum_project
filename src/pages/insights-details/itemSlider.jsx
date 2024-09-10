import React, { useState } from "react";

import { DetailBox } from "../../molecules/DetailBox";

import { QuantamVideo } from "container/QuantamVideo";
import { SmallHadding } from "molecules/SmallHeadding";
import { Paginator } from "primereact/paginator";
import styled from "styled-components";

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

const ItemSlider = () => {
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(8);

  const sliderdata = [
    {
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesettin...",
      image: "media/blog-1-400x248 1.png",
    },
    {
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesettin...",
      image: "media/blog-1-400x248 1 (1).png",
    },
    {
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesettin...",
      image: "media/blog-1-400x248 1.png",
    },
    {
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesettin...",
      image: "media/blog-1-400x248 1 (1).png",
    },
    {
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesettin...",
      image: "media/blog-1-400x248 1.png",
    },
    {
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesettin...",
      image: "media/blog-1-400x248 1 (1).png",
    },
  ];

  const onPageChange = (event) => {
    setFirst(event.first);
    setRows(event.rows);
  };

  const itemTemplate = (item) => {
    return (
      <div className="lg:col-4 md:col-6 sm:col-12">
        <a href="/insights-details" className="no-underline">
          <ItemTag>
            {item?.image ? (
              <img
                src={item?.image}
                //alt={product.name}
                className="w-full"
              />
            ) : (
              <QuantamVideo item={item} />
            )}

            {item?.title && (
              <SmallHadding
                text={item?.title}
                className="my-2 cust-title font-base font-medium text-center no-underline"
              />
            )}
            {item?.description && (
              <DetailBox
                details={item?.description}
                className="m-0 line-height-3 two-line-text mb-2"
              />
            )}
          </ItemTag>
        </a>
      </div>
    );
  };

  return (
    <>
      <div className="grid">
        {sliderdata.map((item) => {
          return itemTemplate(item);
        })}
      </div>
      <CustPaginator
        first={first}
        rows={rows}
        totalRecords={10}
        rowsPerPageOptions={[8]}
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
        template={{ layout: "PrevPageLink PageLinks NextPageLink" }}
      />
    </>
  );
};

export default ItemSlider;

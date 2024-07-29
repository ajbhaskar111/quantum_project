import React, { useState } from "react";
import { Carousel } from "primereact/carousel";
import { responsiveSliderOptions } from "../../assets/config";
import { SmallHadding } from "molecules/SmallHeadding";
import { DetailBox } from "../../molecules/DetailBox";

import { QuantamVideo } from "container/QuantamVideo";

export const MainSlider = (props) => {
  
  const productTemplate = (item) => {
    return (
      <div className="text-justify p-3">
        {item.image ? (
          <img
            src={item.image}
            //alt={product.name}
            className="w-full"
          />
        ) : (
          <QuantamVideo item={item} />
        )}

        <SmallHadding text={item.title} />
        {/* <p className="font-medium">{item.title}</p> */}
        <DetailBox
          details={item.description}
          className="border-bottom-1 border-red-500 pb-4"
        />
      </div>
    );
  };
  return (
    <Carousel
      value={props.data}
      numVisible={3}
      numScroll={1}
      responsiveOptions={responsiveSliderOptions}
      itemTemplate={productTemplate}
      showIndicators={true}
      showNavigators={false}
      autoplayInterval={3000}
      circular={true}
      style={{ backgroundColor: "transparent" }}
    />
  );
};

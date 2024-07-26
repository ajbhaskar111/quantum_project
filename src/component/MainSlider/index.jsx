import React, { useState } from "react";
import { Carousel } from "primereact/carousel";
import { responsiveSliderOptions } from "../../assets/config";
import { SmallHadding } from "molecules/SmallHeadding";
import { DetailBox } from "../../molecules/DetailBox";
import { Dialog } from "primereact/dialog";
import ReactPlayer from "react-player";

export const MainSlider = (props) => {
  const [visible, setVisible] = useState(false);
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
          <div>
            <a onClick={() => setVisible(true)} className="block">
              <div className="video-box relative">
                <img
                  src={item.video[0]}
                  //alt={product.name}
                  className="w-full"
                />
              </div>
            </a>

            <Dialog
              header={item.title}
              visible={visible}
              style={{ width: "70vw" }}
              onHide={() => {
                if (!visible) return;
                setVisible(false);
              }}
            >
              <ReactPlayer
                url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                width={"100%"}
                height={"100%"}
              />
              {/* <video
                controls={true}
                src={item.video[1]}
                poster={item.video[1]}
                width="720"
                height="420"
              /> */}
            </Dialog>
          </div>
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

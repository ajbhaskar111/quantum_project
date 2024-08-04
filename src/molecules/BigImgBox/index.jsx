import React from "react";
import { Image } from "primereact/image";

export const BigImgBox = (props) => {
  return (
    <div className="overlay-icon relative ">
      {props.link ? (
        <a href="/">
          <i className="pi pi-youtube text-white absolute text-5xl flex align-items-center justify-content-center"></i>
          <Image src={`${props.imgpath}`} alt="Image" width="100%" />
        </a>
      ) : (
        <div>
          {/* <i className="pi pi-youtube text-white absolute text-5xl flex align-items-center justify-content-center"></i> */}
          <Image src={`${props.imgpath}`} alt="Image" width="100%" />
        </div>
      )}
    </div>
  );
};

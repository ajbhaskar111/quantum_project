import React, { useEffect, useRef, useState } from "react";
import { Image } from "primereact/image";

export const HomeSlider = (props) => {
  return (
    <>
      <div className="card flex justify-content-center">
        <Image src="media/home_banners.png" alt="Image" width="100%" />
        <div
          style={{
            position: "absolute",
            bottom: "15%",
            color: "#F5F4F1",
          }}
        >
          <p style={{ fontSize: 30 }}>
            Mastering <i>real estate</i> complexities,
            <br /> shaping investments.
          </p>

          <p style={{ fontSize: 15 }}>
            We offer a comprehensive range of end-to-end Real Estate Development
            <br />
            Business services to shape your ideas into revality
          </p>
        </div>
      </div>
    </>
  );
};

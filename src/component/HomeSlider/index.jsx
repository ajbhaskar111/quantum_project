import React, { useEffect, useRef, useState } from "react";
import { Image } from "primereact/image";
export const HomeSlider = (props) => {
  return (
    <>
    <section className="banner_section">
      <div className="card  justify-content-center relative">
        <Image src="media/home_banners.png" alt="Image" width="100%" />
        <div className="banner_text">
          <div className="container">
          <h1 style={{ fontSize: 75, fontFamily:"EB Garamond", fontWeight:"normal"}}>
            Mastering <span style={{fontStyle:"italic", fontWeight:"600"}}>real estate</span> complexities,
            <br /> shaping<span style={{fontStyle:"italic", fontWeight:"600"}}> investments</span>.
          </h1>

          <p style={{ fontSize: 25, fontFamily:"Avenir" }}>
            We offer a comprehensive range of end-to-end Real Estate Development
            <br />
            Business services to shape your ideas into revality
          </p>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

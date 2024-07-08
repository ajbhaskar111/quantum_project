import React from "react";

export const Footer = () => {
  return (
    <footer className="footer_secition thmbg_gray text-white section_padding">
      <div className="container">
        <div className="grid">
          <div className="lg:col-4 md:col-4 sm:col-12">
            <h3 className="title">column 1</h3>
          </div> 
          <div className="lg:col-4 md:col-4 sm:col-12">
            <h2>column 2</h2>
          </div>
          <div className="lg:col-4 md:col-4 sm:col-12">
            <h2>column 3</h2>
          </div>
        </div>
      </div>
    </footer>
  );
};

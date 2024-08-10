import React, { useState } from "react";
import { MenuContainer } from "../../component/MenuContainer";
import "primeicons/primeicons.css";

export const Header = () => {
  const [isMenu, setIsMenu] = useState(false);

  return (
    <header className="bg-gray header border-bottom-1 border-red-700">
      <div className="grid align-items-center">
        <div className="col-4 md:col-4 sm:col-4 pb-0">
          <button
            className="btn bg-tranper border-none shadow-none p-1  cursor-pointer  text-center"
            onClick={() => setIsMenu(!isMenu)}
          >
            <i
              className={`pi ${
                isMenu ? "pi-times" : "pi-align-justify"
              } thm-red fs-25`}
            ></i>
          </button>
        </div>
        <div className="col-4 md:col-4 sm:col-4 ">
          <a href="/" className="logo-box flex justify-content-center m-auto">
            <img src="media/red_logo.png" alt="logo" className="img-fluid" />
          </a>
        </div>
        <div className="col-4 md:col-4 sm:col-4 text-right">
          <button type="button" className="bg-none border-none shadow-none">
            <i className="pi pi-search text-2xl text-red-700"></i>
          </button>
        </div>
      </div>
      {isMenu && <MenuContainer isMenuSelected={() => setIsMenu(false)} />}
    </header>
  );
};

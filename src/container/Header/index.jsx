import React, { useState } from "react";
import { MenuContainer } from "../../component/MenuContainer";

export const Header = () => {
  const [isMenu, setIsMenu] = useState(false);

  return (
    <header className="bg-white header border-bottom-1 border-red-700">
      <div className="grid align-items-center">
        <div className="col-2 md:col-2 sm:col-4 pb-0">
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
        <div className="col-10 md:col-10 sm:col-8 ">
          <a href="/" className="logo-box flex justify-content-end ml-auto ">
            <img src="media/red_logo.png" alt="logo" className="img-fluid" />
          </a>
        </div>
      </div>
      {isMenu && <MenuContainer isMenuSelected={() => setIsMenu(false)} />}
    </header>
  );
};

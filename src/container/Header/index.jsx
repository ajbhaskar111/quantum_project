import React, { useState } from "react";
import { MenuContainer } from "../../component/MenuContainer";

export const Header = () => {
  const [isMenu, setIsMenu] = useState(false);

  return (
    <header className="bg-white header botm_border">
      <div className="grid align-items-center">
        <div className="col-2 md:col-2 sm:col-4 pb-0">
          <button
            className="btn bg_tranper border-none shadow-none p-1  cursor-pointer  text-center"
            onClick={() => setIsMenu(!isMenu)}
          >
            <i
              className={`pi ${
                isMenu ? "pi-times" : "pi-align-justify"
              } thm_red fs-25`}
            ></i>
          </button>
        </div>
        <div className="col-10 md:col-10 sm:col-8 ">
          <a href="/" className="logo_box flex justify-content-end ml-auto ">
            <img src="media/red_logo.png" alt="logo" className="img-fluid" />
          </a>
        </div>
      </div>
      {isMenu && <MenuContainer isMenuSelected={() => setIsMenu(false)} />}
    </header>
  );
};

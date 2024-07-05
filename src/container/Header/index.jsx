import React, { useRef, useState } from "react";
import { MenuContainer } from "../../component/MenuContainer";

export const Header = () => {
  const menu = useRef(null);
  const [isMenu, setIsMenu] = useState(false);
  const [icon, setIcon] = useState("pi-align-justify");

  const handlershowmenu = () => {
    setIsMenu(!isMenu);
  };

  return (
    <header className="bg-white header botm_border">
      <div className="grid align-items-center">
        <div className="col-2 md:col-2 sm:col-4 ">
          <div>
            <button
              className="btn bg_tranper border-none shadow-none p-1 m-2 cursor-pointer w-2rem text-center"
              onClick={() => setIsMenu(!isMenu)}
            >
              <i
                className={`pi ${
                  isMenu ? "pi-times" : "pi-align-justify"
                } thm_red fs-25`}
              ></i>
            </button>
          </div>
        </div>
        <div className="col-10 md:col-10 sm:col-8 ">
          <a href="/" className="logo_box block ml-auto ">
            <img src="media/red_logo.png" alt="logo" className="img-fluid" />
          </a>
        </div>
      </div>
      {isMenu && <MenuContainer isMenuSelected={() => setIsMenu(false)} />}
    </header>
  );
};

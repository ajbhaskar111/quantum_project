import React, { useRef, useState } from "react";
import { MenuContainer } from "../../component/MenuContainer";

export const Header = () => {
  const menu = useRef(null);
  const [isMenu, setIsMenu] = useState(false);

  return (
    <div>
      <section className="">
        <div className="grid">
          <div className="md: col-6">
            <div
              className="p-1 m-2 cursor-pointer w-2rem text-center"
              onClick={(e) => setIsMenu(!isMenu)}
            >
              <i className="pi pi-align-justify"></i>
            </div>
          </div>
        </div>
        {isMenu && <MenuContainer isMenuSelected={() => setIsMenu(false)} />}
      </section>
    </div>
  );
};

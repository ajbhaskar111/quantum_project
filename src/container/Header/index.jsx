import React, { useRef, useState } from "react";
import { Button } from "primereact/button";
import { TieredMenu } from "primereact/tieredmenu";
import { PrimeIcons } from "primereact/api";
import { MenuContainer } from "../../component/MenuContainer";


export const Header = () => {
  const menu = useRef(null);
  const [isMenu, setIsMenu] = useState(false);
 

  return (
    <>
      <header className="header ">
        <div className=" grid m-0 border-1">
          <div className="md:col-6 lg:col-6 sm: col-12">
            <Button className="btn bg-white text-red-700 border-0 menu_button" 
              icon="pi pi-align-justify"
              onClick={(e) => setIsMenu(!isMenu)}
            />
          </div>
          <div className="md:col-6 lg:col-6 sm: col-12">
           <h2 className="m-0">Logo</h2>
          </div>
        </div>
        {isMenu && <MenuContainer />}
      </header>
    </>
  );
};
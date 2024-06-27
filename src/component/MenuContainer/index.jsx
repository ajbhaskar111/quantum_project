import React, { useEffect, useRef, useState } from "react";
import { Button } from "primereact/button";
import { menuItem } from "../../assets/config";
import { ListBox } from "primereact/listbox";

export const MenuContainer = () => {
  const menu = useRef(null);

  const [isActiveIndex, setIsActiveIndex] = useState(0);
  const [selectedMenu, setSelectedMenu] = useState(null);

  useEffect(() => {
    // console.log(selectedMenu);
  }, selectedMenu); 

  const menuItemTemplate = (option)=>{
    return (
      <div className="grid flex align-items-center">
        
          <div className="col-10">{option.label}</div>
          {option.items && 
          <div className="col-2 text-right"><i className="pi pi-angle-right"/></div>
          }
          
      </div>
  );
  }

  return (
    <>
      <div className="grid m-0">
        <div className="lg:col-4 md:col-4 sm:col-12 p-0">
          <div className="custome_menu_box_listing">
            {/* {menuItem.map((item) => item.label)} */}

            <ListBox 
              value={selectedMenu}
              onChange={(e) => setSelectedMenu(e.value)}
              options={menuItem}
              optionLabel="label"
              className="w-full bg-white border-none shadow-none border-noround p-0"
              itemTemplate={menuItemTemplate}
            />
            
          </div>
        </div>
        <div className="lg:col-4 md:col-4 sm:col-12 p-0 bg-gray-200">
          <div className="">
            {selectedMenu && (
              <ListBox
                value={selectedMenu}
                onChange={(e) => setSelectedMenu(e.value)}
                options={selectedMenu?.items}
                optionLabel="label"
                className="w-full bg-transparent border-none shadow-none border-noround p-0"
                itemTemplate={menuItemTemplate}
              />
            )}
          </div>
        </div>
        <div className="clg:col-4 md:col-4 sm:col-12 p-0" bg-gray-200>
          <div className="text-center p-3 font-bold ">
            Add
          </div>
        </div>
      </div>
    </>
  );
};

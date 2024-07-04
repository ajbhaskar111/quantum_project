import React, { useEffect, useRef, useState } from "react";
import { menuItem } from "../../assets/config";
import { ListBox } from "primereact/listbox";
import { useNavigate } from "react-router-dom";

export const MenuContainer = (props) => {
  const menu = useRef(null);
  const navigate = useNavigate();

  const [selectedMenu, setSelectedMenu] = useState(menuItem[0]);
  const [selectedChildMenu, setSelectedChildMenu] = useState(null);

  useEffect(() => {
    console.log(selectedChildMenu);
    if (selectedChildMenu?.path) {
      navigate(selectedChildMenu?.path);
      props.isMenuSelected();
    }
  }, [selectedChildMenu]);

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
    <div className="absolute w-full bg-white top-69">
      <div className="grid">
        <div className="lg:col-4 md:col-12 sm:col-12 p-0">
          <div className="inner_box">
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
        <div className="lg:col-4 md:col-12 sm:col-12 p-0 bg_lightgray">
          <div className="p-3">
            {selectedMenu && (
              <ListBox
                value={selectedChildMenu}
                onChange={(e) => setSelectedChildMenu(e.value)}
                options={selectedMenu?.items}
                optionLabel="label"
                className="w-full bg-transparent border-none shadow-none border-noround p-0"
                itemTemplate={menuItemTemplate}
              />
            )}
          </div>
        </div>
        <div className="lg:col-4 md:col-12 sm:col-12 p-0 bg-gray-200" >
          <div className="text-center p-3 font-bold ">
            Add laskfjsldkf alksfdjsdl
          </div>
        </div>
      </div>
    </div>
  );
};

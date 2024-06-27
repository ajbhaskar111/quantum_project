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
    <div className="absolute w-full bg-white">
      <div className="grid col-12">
        <div className="col">
          <div className="p-3">
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
        <div className="clg:col-4 md:col-4 sm:col-12 p-0" bg-gray-200>
          <div className="text-center p-3 font-bold ">
            Add
          </div>
        </div>
      </div>
    </div>
  );
};

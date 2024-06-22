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
              className="w-full"
            />
          </div>
        </div>
        <div className="col">
          <div className="p-3">
            {selectedMenu && (
              <ListBox
                value={selectedChildMenu}
                onChange={(e) => setSelectedChildMenu(e.value)}
                options={selectedMenu?.items}
                optionLabel="label"
                className="w-full"
              />
            )}
          </div>
        </div>
        <div className="col">
          <div className="text-center p-3 border-round-sm bg-primary font-bold ">
            Add
          </div>
        </div>
      </div>
    </div>
  );
};

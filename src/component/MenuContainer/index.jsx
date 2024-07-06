import React, { useEffect, useRef, useState } from "react";
import { menuItem } from "../../assets/config";
import { ListBox } from "primereact/listbox";
import { useNavigate } from "react-router-dom";
import { Accordion, AccordionTab } from "primereact/accordion";
import styled from "styled-components";
import useScreenSize from "../../assets/useScreenSize";

let CustomAccordianDiv = styled.div`
  .p-accordion-header-link {
    border-radius: 0;
    background-color: #fff;
    border: 0;
    i {
      margin-top: -8px;
      position: absolute;
      right: 0.5em;
      top: 50%;
    }
  }

  .p-accordion-tab-active {
    .p-accordion-header-link,
    .p-accordion-content {
      background: #f5f4f1;
    }

    .p-accordion-content {
      padding: 0;
    }
  }

  .p-accordion .p-accordion-tab {
    margin-bottom: 0px;
  }
`;

let MenuContainerDiv = styled.div`
  .p-listbox-list {
    padding-top: 0px !important;
    padding-bottom: 0px !important;
  }

  .p-listbox .p-listbox-list .p-listbox-item.p-highlight {
    color: #000;
    font-weight: 500;
  }
`;

export const MenuContainer = (props) => {
  const menu = useRef(null);
  const navigate = useNavigate();

  const [selectedMenu, setSelectedMenu] = useState(menuItem[0]);
  const [selectedChildMenu, setSelectedChildMenu] = useState(null);

  const screenSize = useScreenSize();

  useEffect(() => {
    if (selectedChildMenu?.path) {
      navigate(selectedChildMenu?.path);
      props.isMenuSelected();
    }
  }, [selectedChildMenu]);

  const menuItemTemplate = (option) => {
    return (
      <div className="grid flex align-items-center">
        <div className="col-10">{option.label}</div>
        {option.items && (
          <div className="col-2 text-right">
            <i className="pi pi-angle-right" />
          </div>
        )}
      </div>
    );
  };

  const AccordionHeader = (menuObj) => {
    return (
      <span className="flex align-items-center gap-2 w-full">
        <span className="white-space-nowrap">{menuObj.label}</span>
      </span>
    );
  };

  return (
    <div className="absolute w-full bg-white top-69">
      {screenSize < 990 ? (
        <CustomAccordianDiv className="card">
          <Accordion
            multiple={true}
            collapseIcon={
              <i
                className="pi pi-angle-down"
                style={{ fontSize: "1.2rem", marginRight: "3px" }}
              ></i>
            }
            expandIcon={
              <i
                className="pi pi-angle-up"
                style={{ fontSize: "1.2rem", marginRight: "3px" }}
              ></i>
            }
            transitionOptions={{ timeout: 0 }}
          >
            {menuItem &&
              menuItem.map((menuObj, index) => {
                return (
                  <AccordionTab header={AccordionHeader(menuObj)} key={index}>
                    <ListBox
                      value={selectedChildMenu}
                      onChange={(e) => setSelectedChildMenu(e.value)}
                      options={menuObj?.items}
                      optionLabel="label"
                      className="w-full bg-transparent border-none shadow-none border-noround p-0"
                      itemTemplate={menuItemTemplate}
                    />
                  </AccordionTab>
                );
              })}
          </Accordion>
        </CustomAccordianDiv>
      ) : (
        <MenuContainerDiv className="grid">
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
            <div className="">
              {selectedMenu && (
                <ListBox
                  value={selectedChildMenu}
                  onChange={(e) => setSelectedChildMenu(e.value)}
                  options={selectedMenu?.items}
                  optionLabel="label"
                  className="w-full bg-transparent border-none shadow-none border-noround p-0"
                  itemTemplate={menuItemTemplate}
                  style={{ backgroundColor: "#F5F4F1" }}
                />
              )}
            </div>
          </div>
          <div className="lg:col-4 md:col-12 sm:col-12 p-0 bg-gray-200">
            <div className="text-center p-3 font-bold ">
              Add laskfjsldkf alksfdjsdl
            </div>
          </div>
        </MenuContainerDiv>
      )}
    </div>
  );
};

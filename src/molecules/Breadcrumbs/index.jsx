import React from "react";
import { BreadCrumb } from "primereact/breadcrumb";
import { Link } from "react-router-dom";

export const Crumbs = (props) => {
  const url = window.location.pathname;
  let newpath = url.split("/");
  const items = [
    {
      label: "Home",
      template: () => (
        <Link to="/" className="no-underline text-black-alpha-90">
          Home
        </Link>
      ),
    },
    {
      label: `{window.location.pathname}`,
      template: () => (
        <Link
          to={`${window.location.pathname}`}
          className="no-underline text-red-700 capitalize "
        >
          {newpath}
        </Link>
      ),
    },
  ];
  const home = { icon: "pi pi-home", url: "https://primereact.org" };
  return (
    <div className="container">
      <div className="grid mt-4">
        <BreadCrumb
          model={items}
          className="border-none mb-2 text-base font-medium"
        />
      </div>
    </div>
  );
};

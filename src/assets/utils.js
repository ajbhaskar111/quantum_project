import React from 'react'; 
import { PrimeIcons } from 'primereact/api';

export const menuItem = [
  {
    id: 1,
    label: "About Apollo",
    items: [
      {
        id: 1,
        label: "Overview",
        path: "/overview",
      },
      {
        id: 2,
        label: "Our History",
        path: "/history",
      },
    ],
  },
  {
    id: 2,
    label: "Strategies", 
    items: [
      {
        id: 1,
        label: "Overview",
        path: "/overview",
      },
      {
        id: 2,
        label: "Assignment Managment",
        path: "/assignmen_managment",
      },
    ],
  },
];

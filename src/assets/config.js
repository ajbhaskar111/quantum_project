import React from 'react'; 
import { PrimeIcons } from 'primereact/api';

export const menuItem = [
  {
    id: 1,
    label: "About Apollo",
    icon: PrimeIcons.PLUS,
    items: [
      {
        id: 1,
        label: "Overview",
       
      },  
      {
        id: 2,
        label: "Our History",
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
      },
      {
        id: 2,
        label: "Assignment Managment",
      },
    ],
  },
];

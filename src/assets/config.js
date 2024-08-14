
export const menuItem = [
  {
    id: 1,
    label: "About Apollo",
    items: [
      {
        id: 1,
        label: "Overview",
        path: "/about-us",
      },
      {
        id: 2,
        label: "Our History",
        path: "/history",
      },
      {
        id: 3,
        label: "Our People",
        path: "/our-people",
      },
      {
        id: 4,
        label: "Contact Us",
        path: "/contact-us",
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
      {
        id:3,
        label:"Community Impact",
        path: "/community_impect"
      }
    ],
  },
  {
    id: 3,
    label: "Social", 
    items: [
      {
        id: 1,
        label: "Social Responsibility",
        path: "/social_responsibility",
      },
      {
        id: 2,
        label: "Clients",
        path: "/clients",
      }
      
    ],
  },
  {
    id: 4,
    label: "Insights & News", 
    items: [
      {
        id: 1,
        label: "Insights",
        path: "/insights",
      },
    
      
    ],
  },
    
];

export const  responsiveSliderOptions = [
  {
      breakpoint: '1400px',
      numVisible: 4,
      numScroll: 1
  },
  {
      breakpoint: '1199px',
      numVisible: 3,
      numScroll: 1
  },
  {
      breakpoint: '767px',
      numVisible: 2,
      numScroll: 1
  },
  {
      breakpoint: '575px',
      numVisible: 1,
      numScroll: 1
  }
];
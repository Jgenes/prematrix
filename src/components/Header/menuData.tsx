import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },

  // SERVICES
  {
    id: 3,
    title: "Services",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Data Protection & Compliance",
        path: "/data",
        newTab: false,
      },
      {
        id: 32,
        title: "Cyber Security & Digital Foreinsics",
        path: "/cyber",
        newTab: false,
      },
      {
        id: 33,
        title: "ICT Systems Engineering",
        path: "/engineering",
        newTab: false,
      },
      {
        id: 34,
        title: "Software Development",
        path: "/software",
        newTab: false,
      },
      {
        id: 35,
        title: "Platform Management",
        path: "/platform",
        newTab: false,
      },
      {
        id: 36,
        title: "Fintech Development",
        path: "/fintech",
        newTab: false,
      },
    ],
  },

  // SOLUTIONS
  // {
  //   id: 4,
  //   title: "Solutions",
  //   newTab: false,
  //   submenu: [
  //     {
  //       id: 41,
  //       title: "Software & Platform",
  //       path: "/software",
  //       newTab: false,
  //     },
  //     {
  //       id: 42,
  //       title: "ICT Projects",
  //       path: "/projects",
  //       newTab: false,
  //     },
  //     {
  //       id: 43,
  //       title: "Compliance & Data Protection",
  //       path: "/compliance",
  //       newTab: false,
  //     },
  //   ],
  // },

  // COMPANY
  {
    id: 5,
    title: "Company",
    newTab: false,
    submenu: [
      {
        id: 51,
        title: "Training Academy",
        path: "/training",
        newTab: false,
      },
      {
        id: 52,
        title: "Research & Insights",
        path: "/insights",
        newTab: false,
      },
    ],
  },

  {
    id: 6,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
];

export default menuData;
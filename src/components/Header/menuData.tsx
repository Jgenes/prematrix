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

  // SERVICES - 8 CAPABILITY PILLARS
  {
    id: 3,
    title: "Services",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Mining Technology & Security",
        path: "/mining",
        newTab: false,
      },
      {
        id: 32,
        title: "Infrastructure & Networking",
        path: "/engineering",
        newTab: false,
      },
      {
        id: 33,
        title: "Cybersecurity & Forensics",
        path: "/cyber",
        newTab: false,
      },
      {
        id: 34,
        title: "PDPA & Compliance",
        path: "/data",
        newTab: false,
      },
      {
        id: 35,
        title: "Software & Digital Banking",
        path: "/software",
        newTab: false,
      },
      {
        id: 36,
        title: "Fintech Systems",
        path: "/fintech",
        newTab: false,
      },
      {
        id: 37,
        title: "Platform & Managed Services",
        path: "/platform",
        newTab: false,
      },
    ],
  },

  // COMPANY
  {
    id: 5,
    title: "Company",
    newTab: false,
    submenu: [
      {
        id: 51,
        title: "Corporate Profile & Standing",
        path: "/about#corporate-standing",
        newTab: false,
      },
      {
        id: 52,
        title: "Training Academy",
        path: "/training",
        newTab: false,
      },
      {
        id: 53,
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
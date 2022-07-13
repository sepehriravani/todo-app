import {
  BiCloud,
  BiFilterAlt,
  BiArchive,
  BiCalendarStar,
} from "react-icons/bi";

export const menuData = [
  {
    title: "MyDay",
    path: "/",
    icon: <BiCloud />,
    cName: "nav-text",
  },
  {
    title: "Planned",
    path: "/Planned",
    icon: <BiCalendarStar />,
    cName: "nav-text",
  },
  {
    title: "Filter and Label",
    path: "/Filter and Label",
    icon: <BiFilterAlt />,
    cName: "nav-text",
  },
  {
    title: "Archive",
    path: "/Archive",
    icon: <BiArchive />,
    cName: "nav-text",
  },
];

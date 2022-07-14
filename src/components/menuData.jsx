import {
  BiCloud,
  BiFilterAlt,
  BiArchive,
  BiCalendarStar,
} from "react-icons/bi";
import pic from "../assets/joe-ridley-beth-martin-48011-unsplash.jpg";
export const userData =
  //database
  {
    name: "sepehr iravani",
    email: "sepehriravani1@gmail.com",
    icon: pic,
  };

export const menuData = [
  {
    title: "MyDay",
    path: "/",
    icon: <BiCloud />,
    cName: "nav-text myday-text",
    active: false,
  },
  {
    title: "Planned",
    path: "/Planned",
    icon: <BiCalendarStar />,
    cName: "nav-text planned-text",
    active: false,
  },
  {
    title: "Filter and Label",
    path: "/Filter",
    icon: <BiFilterAlt />,
    cName: "nav-text filter-text",
    active: false,
  },
  {
    title: "Archive",
    path: "/Archive",
    icon: <BiArchive />,
    cName: "nav-text archive-text",
    active: false,
  },
];

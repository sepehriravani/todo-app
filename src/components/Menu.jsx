import { menuData } from "./menuData";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
function Menu() {
  return (
    <nav className={`menu`}>
      <ul className="menu-item">
        {menuData.map((item, index) => {
          return (
            <li key={index} className={item.cName}>
              <Link to={item.path}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Menu;

import { menuData, userData } from "./menuData";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
function Menu() {
  return (
    <nav className={`menu`}>
      <div className="user">
        <div className="user-pic">
          <img src={userData.icon} alt={userData.name.substring(0, 2)}></img>
        </div>
        <div className="userStats">
          <h3>{userData.name}</h3>
          <p>{userData.email}</p>
        </div>
      </div>
      <ul className="menu-item">
        {menuData.map((item, index) => {
          return (
            <div className="list-item">
              <Link to={item.path} className="menu-link">
                <li key={index} className={item.cName}>
                  {item.icon}
                  <span>{item.title}</span>
                </li>
              </Link>
            </div>
          );
        })}
      </ul>
    </nav>
  );
}

export default Menu;

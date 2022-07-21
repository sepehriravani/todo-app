import { menuData, userData } from "./menuData";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import EditStats from "./EditStats";
import TodoContext from "../Context/TodoContext";

function Menu() {
  const { username, usermail } = useContext(TodoContext);
  return (
    <>
      <nav className={`menu`}>
        <div className="user">
          <div className="user-pic">
            <img src={userData.icon} alt={userData.name.substring(0, 2)}></img>
          </div>
          <div className="userStats">
            <h3 className="username">{username}</h3>
            <p className="usermail"> {usermail}</p>
          </div>
          <EditStats />
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
    </>
  );
}

export default Menu;

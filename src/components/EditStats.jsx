import { FaTimes, FaEdit } from "react-icons/fa";
import { useState } from "react";
import Fade from "react-reveal/Fade";
import { useContext } from "react";
import TodoContext from "../Context/TodoContext";
function EditStats() {
  const [isOpen, setIsOpen] = useState(false);
  const { userStats } = useContext(TodoContext);

  return (
    <>
      <button className="edit" onClick={() => setIsOpen(!isOpen)}>
        <FaEdit color="purple" />
      </button>
      {isOpen && (
        <Fade big>
          <div className="containers">
            <div className="user-inp">
              <input
                className="inp-user"
                type="text"
                placeholder="your UserName"
              />
              <input
                className="inp-mail"
                type="text"
                placeholder="your Email"
              />
              <button
                onClick={() => {
                  userStats();
                  setIsOpen(!isOpen);
                }}
              >
                Apply
              </button>
            </div>
          </div>
        </Fade>
      )}
    </>
  );
}

export default EditStats;

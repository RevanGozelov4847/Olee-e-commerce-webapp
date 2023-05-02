import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";

const MyIcon = () => {
  const [clicked, setClicked] = useState(false);

useEffect(() => {
  const handleOutsideClick = (event) => {
    const iconParent = document.querySelector('.user-drop-icon-parent');
    if (iconParent && !iconParent.contains(event.target)) {
      setClicked(false);
    }
  };

  window.addEventListener('click', handleOutsideClick);

  return () => {
    window.removeEventListener('click', handleOutsideClick);
  };
}, []);

const handleClick = () => {
  setClicked(prevState => !prevState);
};

return (
  <>
    <button className="user-drop-icon-parent" onClick={handleClick}>
      <FiUser className="userIcon" color="#10071880" />
    </button>
    <div className="icon-container" style={{ display: clicked ? "block" : "none" }}>
      <div className="button-container">
        <button className="button" variant="primary">
          <Link to={"/login"}>Log in</Link>
        </button>
        <button className="button" variant="secondary">
          <Link to={"/login"}>Sign up</Link>
        </button>
      </div>
    </div>
  </>
);

};
export default MyIcon;

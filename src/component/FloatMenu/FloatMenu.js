import React, { useState } from "react";
import "./floatmenu.scss";
import navSvg from "../Assets/svg/nav.svg";
import { NavLink} from "react-router-dom";
const FloatMenu = () => {
    const [displayList, setDisplayList] = useState(false);
  return (
    <div className="floatMenu">
      <div className="floatMenu-container">
       { displayList && <div className="floatMenu-container-list">
          <NavLink className="floatMenu-container-list-item floatMenu-container-list-item-home" to="/">home</NavLink> 
          <NavLink className="floatMenu-container-list-item floatMenu-container-list-item-about" to="/">about us</NavLink> 
          <NavLink className="floatMenu-container-list-item floatMenu-container-list-item-dental" to="/dentalmap">dental map</NavLink> 
          <NavLink className="floatMenu-container-list-item floatMenu-container-list-item-book" to="/">book an appointment</NavLink> 
        </div>}
        <span className="floatMenu-container-hov" onClick={()=> setDisplayList(prevstate=> !prevstate)}>
          <img src={navSvg} alt="nav" />
        </span>
      </div>
    </div>
  );
};

export default FloatMenu;

import React from "react";
import { Link } from "react-router-dom";
import pic from "../assets/mypic.jpg";

const Sidebar = () => {
  return (
    <>
      <div className="bg-secondary p-3" id="sidebar">
        <div id="myPicDiv">
          <img src={pic} alt="Raj Vardhan" id="mypic" />
        </div>
        <div id="link">
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/about"}>About</Link></li>
                <li><Link to={"/edu"}>Eductaion</Link></li>
                <li><Link to={"/certi"}>Certifications</Link></li>
                <li><Link to={"/pro"}>Projects</Link></li>
                <li><Link to={"/contact"}>Contact Me</Link></li>
            </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

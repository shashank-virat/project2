import React from "react";
import "./App.css";
import { FaPlusCircle } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { VscFilterFilled } from "react-icons/vsc";
import { BsBuildingFill } from "react-icons/bs";
import { FaBorderAll } from "react-icons/fa";
import { TiThSmallOutline } from "react-icons/ti";
import { GiGrass } from "react-icons/gi";
import { GiGrassMushroom } from "react-icons/gi";
import logo from "./Assets/logo.jpg";
import { IoCall } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import data from "./components/Data.js";

function App() {
  return (
    <div className="container">
      <div className="card-container">
        <img src={logo} alt="alternative" />
        <h1 className="title">HOMETOWNLANDS</h1>

        <div className="icon">
          <div className="card icon">
            <FaPlusCircle size={42} />
            <RxDashboard size={42} />
          </div>
        </div>
      </div>

      <div className="search-container">
        <input type="text" name="search" id="search" />
        <VscFilterFilled size={30} />
      </div>
      <div></div>
      <div className="button-container">
        <button className="button">For Sale </button>
        <input type="radio" />
        <button className="button">For Rent</button>
        <input type="radio" />
        <button className="button">For Book</button>
        <input type="radio" />
      </div>
      <div className="list-container">
        {data.map((eachData) => {
          const { id, img, heading, paragraph, para, list, located } = eachData;
          return (
            <div key={id} className="properties-container">
              <img src={img} className="image" alt="Alternative" />
              <div>
                <h1 className="heading">{heading}</h1>
                <h2 className="paragraph">{paragraph}</h2>
                <h2 className="para">{para}</h2>
                <h2 className="list">{list}</h2>
                <h2 className="located">{located}</h2>
                <IoCall size={30} />
                <IoLogoWhatsapp size={30} />
                <SiGmail size={30} />
              </div>
            </div>
          );
        })}
      </div>
      <div className="footer">
        <div className="footer-section">
          <BsBuildingFill size={44} />
          <>Buildings</>
          <FaBorderAll size={44} />
          <>Commercial spaces</>
          <TiThSmallOutline size={46} />
          <>Plots</>
          <GiGrass size={46} />
          <>Framlands</>
          <GiGrassMushroom size={44} />
          <>Resorts</>
        </div>
      </div>
    </div>
  );
}

export default App;

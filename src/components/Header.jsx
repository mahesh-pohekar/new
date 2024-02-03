import React, { useState } from "react";
import { useMediaQuery } from 'react-responsive'
import Toggle from "./Toggle";
import { AiOutlineUnorderedList } from "react-icons/ai";

function Header(props){
  const [isClicked, setIsClicked] = useState(false);
  const smallScreen = useMediaQuery({
    maxWidth:991
    })
    function handleClick(){
      setIsClicked(!isClicked);
     
    }
    return(
        <nav className="navbar navbar-expand-lg  ">
            <button className="btnheader" onClick={()=>props.setPage("home")}> <img  src="images/logo.jpg" alt="logo" /> </button>
            {isClicked && <Toggle setPage={props.setPage}/>}
            {smallScreen && <button className="toggle" onClick={handleClick}><AiOutlineUnorderedList /></button> }

            
            <div className="collapse navbar-collapse " id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <button className="btnheader" onClick={()=>props.setPage("home")}>Home</button>
                </li>
                <li className="nav-item">
                  <button className="btnheader" onClick={()=>props.setPage("resume")}>About</button>
                </li>
                <li className="nav-item">
                  <button className="btnheader" onClick={()=>props.setPage("contact")}>Contact</button>
                </li>
              </ul>
            </div>
        </nav>
    );
}

export default Header;
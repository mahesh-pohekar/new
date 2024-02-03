import React from "react";

function Toggle(props){
    return(
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
    );
}

export default Toggle;
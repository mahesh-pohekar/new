import React from "react";
import { SocialIcon } from "react-social-icons";

function Home(){
    return(
        <div className="boxes montserrat-App">
            <div className="homecontent">
            <div id="leftbox">
            </div>
            <div id="profile">
                <div className="profile-content">
                    <div id="profile-photo"><img src="images/myphoto.jpg" alt="profile" /></div>
                    <div><h1>Mahesh <br/>Pohekar</h1></div>
                    <hr/>
                    <div><h2>Web Developer</h2></div>
                    <div id="profile-footer">
                    <SocialIcon className="footer-icon" style={{width:"20px", height:"20px"}}  url="https://www.linkedin.com/in/mahesh-pohekar-899517211" />
                    <SocialIcon className="footer-icon"  style={{width:"20px", height:"20px"}} url="https://github.com/mahesh-pohekar" />
                    <SocialIcon className="footer-icon"  style={{width:"20px", height:"20px"}} url="https://www.instagram.com/" />
                    <SocialIcon className="footer-icon"  style={{width:"20px", height:"20px"}} url="mailto:maheshpohekar25@gmail.com" />
                      </div>
                </div>
                <div className="profile-info">
                    <p id="hello">Hello</p> 
                    <h4>Here's who I am & what I do</h4>
                    <a href="https://drive.google.com/file/d/1tvQAVBCbhduzkaGTyHsV8yLd8bYOw4fK/view?usp=drivesdk"><button type="button" className="btnn">Resume</button></a>
                    <p>
                      I'm a dynamic Full Stack Developer with expertise in Java, Data Structures,etc. 
                      Proficient in React, Node.js, and Express.js for creating seamless web applications. 
                      My hands-on experience includes database management using MySQL and a strong understanding of Agile methodologies.
                      I'm pursuing Computer Engineering currently in my last semester with 9.34 CGPA.
                    </p>
                  </div>
            </div>
            </div>
        </div>
      
    );
}

export default Home;
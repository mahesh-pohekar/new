import React from "react";
import { AiOutlineLink } from "react-icons/ai";


function Resume(){
    return (
      <div className="cards montserrat-App">
        <h3 className="head">About me</h3>
        <h4>Education</h4>
        <a href="https://drive.google.com/file/d/1tvQAVBCbhduzkaGTyHsV8yLd8bYOw4fK/view?usp=drivesdk"><button type="button" className="btnn">Download CV</button></a>
        
      <div className="resume">
        <div className="template edu">
          <div className="col-md-6">
            <p className="year">2020-2024</p>
            <p className="degree">Bachelor of Engineering<br/>
            (pursuing)</p>
          </div>
          <div className="col-md-6">
            <p className="clg">
              PCET's Nutan Maharashtra Institute of Engineering & Technology, Talegaon Dabhade, Pune.
            </p> 
          </div>
        </div>

        <div className="template edu">
          <div className="col-md-6">
            <p className="year">2018-2019</p>
            <p className="degree">HSC [Mathematics + Biology] <br/><br/>Percentage: 77.69%</p>
          </div>
          <div className="col-md-6">
            <p className="clg"> Rajarshi Shahu
              Junior Science college,
              Latur.</p>
          </div>
        </div>
        <div className="template edu">
          <div className="col-md-6">
            <p className="year">2016-2017</p>
            <p className="degree">SSC<br/><br/>Percentage: 98.60%</p>
          </div>
          <div className="col-md-6">
            <p className="clg"> S. M. S. Jain Highschool, Jalna.</p>
          </div>
        </div>


        <p className="heading">Skills and Experties</p>
        <div className="template">
            <ul>
              <li>Programming Languages: Java (Advance), C++, Python</li> <br/>
              <li>Web Development: React, Node, JavaScript, Express, EJS, HTML, CSS</li><br/>
              <li>Database Management: MySQL</li><br/>
              <li>Machine Learning and Data Analysis</li><br/>
              <li>Computer Network: TCP/IP, DNS, DHCP, LAN, WAN</li><br/>
              <li>Tools: Git, GitHub, Visual Studio Code, Microsoft Excel, Microsoft Office</li><br/>
              <li>Software Engineering: Software Development Life Cycle (Agile Methodology), Debugging</li>
            </ul>
        </div>

        <a id="certificate-btnn" href="https://bit.ly/3ENIloC"><p className="heading"><img src="images/linkIcon.png" alt=""/>CERTIFICATES</p></a> 
        <div className="template">
          <div className="col-md-6">
            <ul>
              <li>Crash Course on Python<br/>Google</li>
              <br/>
              <li>Web Developement<br/>Udemy</li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul>
              <li>Python 3.4.3 training<br/>IIT Bombay</li>
              <br/>
              <li>Data Science training<br/>Acmegrade</li>
            </ul>
          </div>
        </div>


        <p className="heading">Projects</p>
          <div className="template">
              <h5>Motor Servicing at Home (Node.js, Express.js, React.js, Axios, Sequelize, MySQL) <a href="https://github.com/mahesh-pohekar/Motor-Servicing-at-Home"><AiOutlineLink /></a></h5>
              <ul>
                <li>Developed a user-friendly platform that enables motor servicing conveniently at users' homes.</li>
                <li>Integrated geolocation-based matchmaking to connect users with nearby service providers.</li>
                <li>Implemented user authentication for secure access using RESTful APIs.</li>
              </ul>
              <br />
              <h5>Online Bookstore (Java, MySQL) <a href="https://github.com/mahesh-pohekar/OnlineBookstore"><AiOutlineLink /></a></h5>
              <ul>
                <li>Collaborated with a cross-functional team of 3 members to design and implement a web-based bookstore application.</li>
                <li>Enhanced teamwork and communication by actively participating in team meetings and sharing knowledge, contributing to a seamless project workflow.</li>
                <li>Developed user authentication and shopping cart functionality.</li>
              </ul>
              <br/>
              <h5>Sentiment Analysis of Social Media Data (Python, Natural Language Processing) <a href="https://github.com/mahesh-pohekar/Sentiment-Analysis"><AiOutlineLink /></a></h5>
              <ul>
                <li>Extracted Valuable Insights from a large dataset of Social Media posts using Python.</li>
                <li>Gained a deep understanding of the sentiments by utilizing tokenization and sentiment lexicons techniques, achieving a 15% improvement in sentiment analysis accuracy</li>
              </ul>
          </div>
          </div>

          </div>
    );
}
export default Resume;
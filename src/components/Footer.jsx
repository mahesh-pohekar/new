import React from "react";
import { SocialIcon } from 'react-social-icons'

function Footer(){
    return(
        <div className="endfooter">
          <div className="footitem" ><strong>Write</strong> <br/>
            maheshpohekar25@gmail.com
          </div>
          <div className="footitem copyright">
          ©{new Date().getFullYear()} Mahesh Pohekar
        </div>
  
        <div className="footitem follow"><strong>Follow</strong> <br/>
        <SocialIcon className="footer-icon" style={{width:"20px", height:"20px"}}  url="https://www.linkedin.com/in/mahesh-pohekar-899517211" />
        <SocialIcon className="footer-icon"  style={{width:"20px", height:"20px"}} url="https://github.com/mahesh-pohekar" />
        <SocialIcon className="footer-icon"  style={{width:"20px", height:"20px"}} url="https://www.instagram.com/" />
        <SocialIcon className="footer-icon"  style={{width:"20px", height:"20px"}} url="mailto:maheshpohekar25@gmail.com" />
        
        </div>
  
      </div>
    );
}

export default Footer;
import React from "react";
import ACCESS_KEY from "../config"

function Contact(){
    return(
        <div className="cards montserrat-App">
      <h3 className="head">Let's Talk</h3>
      <div className="form-div">
        <form action="https://api.web3forms.com/submit" method="post">
        <input type="hidden" name="access_key" value={ACCESS_KEY} />
          <div id="firstname-div"><label>First Name<span className="req">*</span>
          <input type="text" id="fname" name="UserFName"  required />
          </label>
            
          </div>

          <div><label>Last Name<span className="req">*</span>
          <input  type="text" name="UserLName" required/>
          </label>
          </div>

          <label  >Email<span className="req">*</span>
          <input  type="email" name="UserEmail" required/>
          </label>

          <label  >Subject
          <input type="text" name="Subject"/>
            </label>
          
          

          <label  >Message
          <textarea name="Message" id="" cols="30" rows="2"></textarea></label>

          <button type="submit" className="btnn">SEND</button>
        </form>



      </div>
      </div>
      
    );
}

export default Contact;
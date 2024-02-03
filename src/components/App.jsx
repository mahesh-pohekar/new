import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Resume from "./Resume";
import Contact from "./Contact";



function App() {
    const [isHome,setIsHome]= useState(true);
    const [isResume,setIsResume]= useState(false);
    const [isContact,setIsContact]= useState(false);
    function setPage(pageName){
        if(pageName === "home"){
            setIsHome(true);setIsContact(false);setIsResume(false);
        }
        else if(pageName === "resume"){
            setIsHome(false);setIsContact(false);setIsResume(true);
        }
        else if(pageName ==="contact"){
            setIsHome(false);setIsContact(true);setIsResume(false);
        }
    }
    return (<>
        <Header setPage={setPage}/>
        {isHome && <Home/>}
        {isResume && <Resume />}
        {isContact && <Contact />}
        <Footer />
        </>
    );
}

export default App;
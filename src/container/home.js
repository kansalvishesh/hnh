import React , { useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import CustomNavbar from "../component/navbar";
import GetStarted from "./getStarted";
import AboutUs from "./about";
import Contact from "./contact";

const Home = (props) => {
    useEffect(()=>{
        Aos.init({duration:1000});
    },[]);
    return(
        <>
            <div className="home">
                <CustomNavbar props={props}/>
                <div><GetStarted/></div>
                <div><AboutUs/></div>
                <div><Contact/></div>
            </div>
        </>
    )
}


export default Home;
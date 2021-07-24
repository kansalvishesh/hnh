import React ,{useEffect} from "react";
import getStarted from "../assets/getstarted.jpg";
import classes from "../CSS/getStarted.module.css";
import { Button } from "react-bootstrap";
import Aos from "aos";
import { Link } from "react-scroll";
import {Link as RouterLink} from "react-router-dom";

const GetStarted = () =>{
    useEffect(()=>{
        Aos.init({duration:3000});
    },[]);
    return(
        <>
            <div className="container-fluid" className={classes.GetStarted} id="getStarted" style={{backgroundImage:`url(${getStarted})`,
            backgroundSize:"cover",
            display:"flex",
            minWidth: "100%",
            
            alignItems:"center",
            justifyContent:"center",
            flexDirection:"column",
            color:"white",
            fontFamily: 'Lexend Giga'}}>
                <h1 data-aos="fade-down" style={{textAlign:"center"}}>TEX FAB</h1>
                <br/>
                <h3  data-aos="fade-down">We deal in quality</h3><br/>
                <p  data-aos="fade-down"><Button variant="light" style={{marginRight:"10px",borderRadius:"20px"}}><Link activeClass="active"
                    to="about"
                    className={classes.Link}
                    spy={true}
                    smooth={false}
                    duration={1000}
                    offset={-50}
                    >About</Link></Button>
                <Button variant="light" style={{marginRight:"10px",borderRadius:"20px"}}><Link activeClass="active"
                    to="contact"
                    className={classes.Link}
                    spy={true}
                    smooth={false}
                    duration={1500}
                    offset={-50}
                    >Contact</Link></Button>
                <Button variant="light" style={{borderRadius:"20px"}}><RouterLink 
                    to="/products"
                    className={classes.Link}
                    style={{color:"black",textDecoration:"none"}}
                    >Products</RouterLink></Button>
                </p>
            </div>
        </>
    )
}
export default GetStarted;
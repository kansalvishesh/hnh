import React from 'react';
import classes from "../CSS/footer.module.css";
import { Row,Col,Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import {Link as RouterLink} from "react-router-dom";

const Footer = (props)=>{
    return(
        <div>
            <div className={classes.Footer} style={{backgroundColor:"#FCDFE1",backgroundSize:"100% 100%",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column",
        fontFamily:"Lexend Giga",
        color:"black",
        padding:"2%",}} >
                <center>
                   <h1>TEX FAB</h1>
                </center>
                <br/>
                <Container fluid>
                <Row>
                    <Col>
                    <Link activeClass="active"
                    to="getStarted"
                    className={classes.Mylinks}
                    spy={true}
                    smooth={false}
                    duration={1000}
                    offset={-50}
                    ><h4 style={{color:"black"}}>Home</h4></Link>
                    </Col>
                    
                    <Col>
                    <Link activeClass="active"
                    to="about"
                    className={classes.Mylinks}
                    spy={true}
                    smooth={false}
                    duration={1000}
                    offset={-50}
                    ><h4 style={{color:"black"}}>About Us</h4></Link>
                    </Col>    
                    
                    <Col>
                    <RouterLink 
                    to="/products"
                    className={classes.Mylinks}
                    ><h4 style={{color:"black"}}>Collections</h4></RouterLink>
                    </Col>
                    <Col>
                    <Link 
                    to="contact"
                    className={classes.Mylinks}
                    spy={true}
                    smooth={false}
                    duration={2000}
                    offset={-50}
                    ><h4 style={{color:"black"}}>Contact Us</h4></Link>
                    </Col>
                        
                
                   
                </Row>
                </Container>
                <br/>
                <h3>
                    Get in touch:
                </h3>
                <p>
                <i className="fab fa-twitter"></i>
                </p>
                
            </div>
            
        </div>
    )
}

export default Footer;
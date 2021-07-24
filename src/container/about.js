import React , {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Row,Col } from "react-bootstrap";
import about from "../assets/about.jpg";



const AboutUs = ()=>{
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);
    return(
        <>
        <div >
            <div className="container-fluid" id="about" style={{
                    display:"flex",
                    alignItems:"center",
                    fontFamily:"Lexend Giga",
                    flexDirection:"column",
                    height:"100%",
                    padding:"2%"}}>
                <h1 data-aos="fade-up" style={{textAlign:"center"}}>Who we are</h1>
                <div data-aos="fade-right" className="container-fluid " style={{margin:"2% 0"}}>
                    <Row>
                        <Col md={6} xs={12} >
                            <div style={{backgroundImage:`url(${about})`,backgroundSize:"100% 100%",height:"100%"}} ></div>
                        </Col>
                        <Col md={6} xs={12}>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <br/>
                      
                        </Col>
                    </Row>
                </div>

            </div>
            </div>
        </>
    )
}
export default AboutUs
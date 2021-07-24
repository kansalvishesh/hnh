import React, { useEffect,useState } from "react";
import {Navbar, Nav, NavDropdown} from "react-bootstrap";
import classes from "../CSS/navbar.module.css";
import { NavLink} from "react-router-dom";
import {Link as RouterLink} from "react-router-dom";
import {Link} from "react-scroll";
import CartIcon from "../assets/cartIcon";
import firebase from "../firebase";
import { useDispatch } from "react-redux";
import { cartSave } from "../entities/cart/action/action";

const CustomNavbar = (props)=>{
    const [cartcount,updateCount] = useState(0);
    const dispatch = useDispatch();
    console.log(props.props)
    const ref = firebase.firestore().collection("cart")
    function getCart(){
        ref.onSnapshot((querySnapshot)=>{
            const items = [];
            querySnapshot.forEach((doc)=>{
                items.push(doc.data());
            });
            updateCount(items.length)
            dispatch(cartSave(items))
            console.log(items)
            
        })
    }
    useEffect(()=>{
        console.log("changed")
        getCart();
    },[props.props.location.pathname])
    return(
        <>
        <div>
            {
                props.props.location.pathname=="/"?
                (
                    <>
                    <Navbar style={{fontFamily:"Lexend Giga"}} expand="sm" bg="light" fixed="top">
        <Navbar.Brand style={{marginLeft:"10px"}} href="#home">TEX FAB</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav style={{margin:"0 0 0 auto"}} className="navlinks">
                
                <Link activeClass="active"
                    to="getStarted"
                    className={classes.Mylinks}
                    spy={true}
                    smooth={false}
                    duration={1000}
                    offset={-50}
                    delay={0}
                    >Home</Link>
                        <Link activeClass="active"
                    to="about"
                    className={classes.Mylinks}
                    spy={true}
                    smooth={false}
                    duration={1000}
                    delay={0}
                    offset={-50}
                    >About Us</Link>
    
                <RouterLink  className={classes.Mylinks} to="/products">
                Products
                </RouterLink>
                <Link activeClass="active"
                    to="contact"
                    className={classes.Mylinks}
                    spy={true}
                    smooth={false}
                    duration={1000}
                    delay={0}
                    offset={-50}
                    >Contact Us</Link>
                </Nav>
                <Nav>

                <div style={{float:"right"}}>
                <CartIcon count={cartcount}/>
                </div>
                </Nav>
                </Navbar.Collapse>
        </Navbar>
        </>
        ): (<>
        <Navbar style={{fontFamily:"Lexend Giga"}} bg="light" fixed="top">
    <Navbar.Brand style={{marginLeft:"10px"}} href="#home">TEX FAB</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav style={{margin:"0 0 0 auto"}} className="navlinks">
        <RouterLink  className={classes.Mylinks} to="/">
                Home
                </RouterLink>
            
            </Nav>
            <Nav>

            <div style={{float:"right"}}>
            <CartIcon count={cartcount}/>
            </div>
            </Nav>
            </Navbar.Collapse>
    </Navbar>
        </>
    )
        
        }
           
            
        </div>
        </>
    )
}
export default CustomNavbar;
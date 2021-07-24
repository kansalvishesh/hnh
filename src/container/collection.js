import React,{useEffect, useState} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import CircularProgress from '@material-ui/core/CircularProgress';
import { Card, Col, Row, Button, Container } from "react-bootstrap";
import classes from "../CSS/collection.module.css";
import { Link } from "react-router-dom";
import CustomNavbar from "../component/navbar";

import firebase from "../firebase";
import { productsSave } from "../entities/products/action/action";
import {useDispatch} from "react-redux";
import Footer from "../component/footer";

const Collections = (props)=>{
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);
    const dispatch = useDispatch();
    const [products,updateproducts] = useState([]);
    const ref = firebase.firestore().collection("products")
    // console.log(ref);
   

    function getproducts(){
        ref.onSnapshot((querySnapshot)=>{
            const items = [];
            querySnapshot.forEach((doc)=>{
                items.push(doc.data());
            });
            updateproducts(items)
        })
    }
    console.log(products)
    useEffect(()=>{
        getproducts();
    },[]);
    useEffect(()=>{
        if(products.length>0){
            dispatch(productsSave(products))
        }
    },[products])
    const handleClick=(id)=>{
        console.log(id)
        props.history.push(`/products/${id}`)
    }
    return(
        <>
        <Container>
        <CustomNavbar props={props}/>
        </Container>
        
        <div id="collection" style={{display:"flex",
            alignItems:"center",
            justifyContent:"center",
            flexDirection:"column",
            fontFamily:"Lexend Giga",
            padding:"2%",
            width:"100%"}}>
                <h1 style={{textAlign:"center",marginBottom:"2%",marginTop:"60px"}}>Our Collections</h1>
            </div>
            <Container fluid>
                <Row >
                {
                    products.length>0?
                    products.map((product,key)=>{
                       return(
                           <>
                            <Col key={key} data-aos="fade-right" md={6} xs={12} lg={4} style={{display:"flex",
                            alignItems:"center",
                            justifyContent:"center",
                            flexDirection:"column",
                            padding:0}}>
                            <Card onClick={()=>handleClick(product.id)} className={classes.Card}>
                                <Card.Img variant="top" src={product.image} className={classes.Img} />
                                <Card.Body>
                                    <Card.Title> {product.title} </Card.Title>
                                    <Card.Text>Price: ₹{product.price} </Card.Text>                                    
                                </Card.Body>
                            </Card>
                        </Col>
                           </>
                       )
                    }):<center><CircularProgress color="secondary" /></center>
                }
                </Row>

            
        </Container>
        <Footer/>
        </>
    )
}
export default Collections;
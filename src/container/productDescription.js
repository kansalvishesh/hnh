import React , {useEffect, useState} from "react";
import CircularProgress from '@material-ui/core/CircularProgress';
import { Card, Col, Container, Row ,Button, Form} from "react-bootstrap";
import classes from "../CSS/collection.module.css";
import CustomNavbar from "../component/navbar";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "../component/footer";
import { useSelector } from "react-redux";
import firebase from "../firebase";
import Carousel from "../component/carouselDescriptionPage/carousel";


const Myproducts=(props)=>{
        const quantity = [1,2,3,,4,5,6,7,8,9,10]
        const  [products,updateproducts] = useState([]);
        const cartItems = useSelector(state=>state.cart.cart)
        const data = useSelector(state=>state.products.products)
        const [showProduct,updateShowProduct] = useState([])
        const ref = firebase.firestore().collection("products")
        const ref2 = firebase.firestore().collection("cart")
        function getproducts(){
            ref.onSnapshot((querySnapshot)=>{
                const items = [];
                querySnapshot.forEach((doc)=>{
                    items.push(doc.data());
                });
                updateproducts(items)
                console.log(items)
                
            })
        }
      
        useEffect(()=>{
            getproducts();

        },[]);
        const [addtocartquantity,updatequantity] = useState(1)
        const handleChange=(e)=>{
            console.log(e.target.value)
            updatequantity(e.target.value)
        }
        console.log(props.match.params.id)
        console.log(".....",products)
        
        useEffect(()=>{
            if(products.length>0){
                const showdata = products.filter((a)=>{
                    return a.id==props.match.params.id
                })
                console.log("showdata",showdata)
                updateShowProduct(showdata)
            }
        },[products,data])
        function handleClick(item){
            var x;
            cartItems.filter((a)=>{
                if(a.id==showProduct[0].id){
                    x  = a.quantity
                }else{
                    x=0;
                }
            })
            console.log(x)
            if(x>0){
                ref2.doc(item.id).set({...item,quantity:parseInt(addtocartquantity)+parseInt(x)}).catch((err)=>{
                    alert(err)
                })
            }else{
                ref2.doc(item.id).set({...item,quantity:parseInt(addtocartquantity)}).catch((err)=>{
                    alert(err)
                })
            }
            
        }
        return(
            <>
                <CustomNavbar props={props}/>
                <Container style={{marginTop:"80px"}} fluid>
                {
                    showProduct.length>0?
                    showProduct.map((item,key)=>{
                        return(
                            <>
                    <Row key={key}>
                    <Col md={12}>
                        <div className={classes.Description}> 
                            <Carousel main={item.image} front={item.image} back={item.image} top={item.image} bottom={item.image}/>
                          
                        </div> 
                           
                            <div className={classes.Description}>
                                <div className={classes.CenterColumn}>
                                    
                                    <div className={classes.ProductName}>{item.title} </div>
                                </div>
                            <Row className={classes.Padding}>
                                <Col xs={4}>
                    
                                    <div className={classes.Centered}>
                                        <span style={{fontWeight:'bold',color:"orange",fontSize:"15px"}}>Special Price:</span>
                                        <span style={{fontSize:"14px"}}>₹{item.price}</span>
                                    </div>
                                    
                                
                                     
                                </Col>
                                <Col xs={8}>
                                    <Row>
                                        <Col sm={6} md={3}>
                                        <div className={classes.Centered}>
                                        <span style={{fontWeight:'bold',fontSize:"14px"}}>Brand:</span>
                                        <span style={{fontSize:"14px"}}>{item.brand}</span>
                                        </div>
                                        
                                        </Col>
                                      
                                        <Col sm={6} md={3}>
                                        
                                    <div className={classes.Centered}>
                                        <span style={{fontWeight:'bold',fontSize:"14px"}}>Country of Origin:</span>
                                        <span style={{fontSize:"14px"}}>{item.country}</span>
                                    </div>
                                        </Col>
                                         
                                        <Col sm={6} md={3}>
                                        <div className={classes.Centered}>
                                        <span style={{fontWeight:'bold',fontSize:"14px"}}>Quantity:</span>
                                        <Form>
                                        <Form.Group style={{width:"50%"}} controlId="formBasicEmail">
                                            <Form.Control onChange={(e)=>handleChange(e)} as="select" type="quantity" placeholder="Select Quantity">
                                            {
                                                quantity.map((item,key)=>{
                                                    return(
                                                        <>
                                                        <option style={{fontSize:"14px"}} value={item} key={key}>{`${item}`}</option>
                                                        </>
                                                    )
                                                    
                                                    
                                                })
                                            }
                                            {/* <option value="1">1</option>
                                            <option value="2">2</option> */}
                                            </Form.Control>
                                           
                                        </Form.Group>
                                        </Form>
                                    </div>
                                        </Col>
                                        <Col sm={6} md={3}>
                                        <div style={{background:'white',padding:' 5px 15px'}}> 
                                       
                                                <Button 
                                                className={classes.Button}
                                                onClick={()=>handleClick(item)}
                                                id="AddToCart" 
                                                style={{color:'white'}} 
                                                variant="info"
                                                
                                                ><b>Add To Cart</b></Button>
                                     
                                        </div>
                                        </Col>
                                    </Row>
                                    
                                    <br/>
                                   
                                </Col>
                                
                            </Row>   
                            <Container fluid>
                <Row>
                <Col md={12}>
                    <div style={{textAlign:"left"}} className={classes.Container}> 
                    <div style={{color:"orange",fontWeight:"bold"}}>
                        <span style={{borderBottom:"2px solid orange"}}>Overview</span>
                        </div>
                        <br/>
                        <div>
                           {item.description}
                        </div>
                    </div>
                </Col>
                
            </Row>
        </Container>
        </div>
                           
        </Col>
                        </Row>
              
                            </>
                        )
                    })
                    :
                    <center><CircularProgress color="secondary" /></center>
                }
                </Container>
                
                <div style={{marginTop:"2%"}}><Footer/></div>

            </>
        )
    

}
export default Myproducts;

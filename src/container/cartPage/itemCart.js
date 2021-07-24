import React, { useState, useEffect } from 'react';
import {Row,Col,Container, Button} from 'react-bootstrap';
// import Img from '../../assets/carousel.png';

import classes from './cart.module.css';

import { Link} from 'react-router-dom';
import  firebase from '../../firebase';

const ItemCart = (props)=>{
    console.log(props)
    const [totalprice,updateprice] = useState(0);
    const [dataSet,updateDataSet] = useState([]);
   
    const ref = firebase.firestore().collection("cart")

    const removeFromCart =(item)=>{
        console.log("eeeeeee",item.id)
        ref.doc(item.id).delete().catch((err)=>{
            alert(err)
        })
        
    }
    console.log(dataSet)
    useEffect(()=>{
        if(props.dataSet.length>0){
            updateDataSet(props.dataSet)
           
        }
       
    },[props])
    useEffect(()=>{
        let total = 0;
        var i;
        for(i=0;i<dataSet.length;i++){
            total+=dataSet[i].price*dataSet[i].quantity
        }
        updateprice(total);
    },[dataSet])

    return(
        <Container fluid>
            <Row>
                <Col xl={9} lg={8} xs={12}>
                    <div className={classes.Container}> 
                        <h3 className={classes.Heading}>Your Shopping Cart</h3>
                        
                        <ul className={classes.Ul}>
                            {
                                dataSet!==undefined&&dataSet.length>0?dataSet.map((item,i)=>
                                
                            //    console.log(item)
                               <li className={classes.Li} key={i}>
                               <div>
                                   <img src={item.image} className={classes.Img} alt="Img"/> 
                                   <p style={{marginTop:'5px'}}><span style={{marginLeft:'5px',fontWeight:'bold'}}>{item.title}</span></p>
                               </div>
                               <div> 
                                   <p className={classes.ProductName}>{item.productName}</p>
                                   <span 
                                       className={classes.Remove}
                                       onClick={()=>removeFromCart(item)}
                                       >REMOVE</span>
                               </div>
                               <div>
                               <p className={classes.IncreaseDecrease}>
                                  
                                  <span style={{fontWeight:"bold"}} className={classes.Qty}>Quantity</span>
                                  
                              </p>
                              <p className={classes.IncreaseDecrease}>
                                  
                                  <span className={classes.Qty}>{item.quantity}</span>
                                  
                              </p>
                               </div>
                               <div>
                               <p className={classes.Qty} style={{fontWeight:"bold"}}>
                                   Total Price
                                  
                               </p>      
                               <p className={classes.Qty}>₹
                                   {
                                       (item.price)*(item.quantity)
                                   }
                                  
                               </p>      
                               </div>
                              
                                
                           </li>
                                ):null
                            }
                        </ul>
                        <Link to="/products" style={{textDecoration: 'none'}}>
                            <span className={classes.BackToShop}>
                                <i className="fas fa-long-arrow-alt-left fa-lg"></i>
                                <span className={classes.Back}>Back to shop</span>
                            </span>
                        </Link>
                    </div>
                </Col>
                <Col xl={3} lg={4} xs={12}>
                    <div style={{backgroundColor:'white',padding:'2%'}}>
                        <h3 className={classes.Heading}>Cart Summary</h3>  
                        <div className={classes.Center} style={{fontWeight:'bold'}}>
                            <div>Total Amount</div>   
                            <div>₹{totalprice}</div> 
                        </div>
                        <hr/>
                        {/* <p className={classes.Save}>You will save Rs7000 on this order</p> */}
                        <Link to="/"> 
                        <Button size="lg" variant="info" className={classes.Button2} type="submit">
                            CHECKOUT
                        </Button>
                        </Link>
                    </div>  
                </Col>
            </Row>
        </Container>
    )
}
export default ItemCart;
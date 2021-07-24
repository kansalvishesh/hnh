import React, { Fragment,useEffect,useState } from 'react';
import {Container} from 'react-bootstrap';
import EmptyCart from './emptyCart';
import ItemCart from './itemCart';
import {useSelector} from 'react-redux';
import CustomNavbar from '../../component/navbar';
import Footer from '../../component/footer';
import firebase from "../../firebase"
const Cart = (props)=>{
    const [cartcount,updateCount] = useState(0);
    const [data,updateDataSet] = useState([])
    console.log(props.props)
    const ref = firebase.firestore().collection("cart")
    function getCart(){
        ref.onSnapshot((querySnapshot)=>{
            const items = [];
            querySnapshot.forEach((doc)=>{
                items.push(doc.data());
            });
            updateCount(items.length)
            updateDataSet(items)
            // console.log(items)
            
        })
    }
    useEffect(()=>{
        // console.log("changed")
        getCart();
    },[])

    // console.log(props)

   

    
    return(
        <Fragment>
            <CustomNavbar props={props}/>
            <br/><br/><br/><br/>
            <Container fluid>
                {
                    cartcount>0? 
                        <ItemCart dataSet={data} props={props} />:<EmptyCart/>
                }
            </Container>
            <Footer/>
        </Fragment>
    )
}

export default Cart;
import React from 'react';
import classes from './cart.module.css';
import emptyCart from '../../assets/emptycart.png'
import {Link} from 'react-router-dom';
import { Container } from 'react-bootstrap';

const EmptyCart = ()=>{
    return(
        <Container style={{backgroundColor:'white'}}> 
            <div className={classes.Centered}>
                <div>
                    <img src={emptyCart} alt="Empty Cart" className={classes.Img2}/>
                </div>
                {/* <h3 className={classes.H3}>Your cart is empty</h3> */}
                <br/>
                <div className={classes.Light}>Looks like you haven't made</div>
                <div className={classes.Light}>your choice yet..</div>
                <div className={classes.Margin}>
                    <Link to="/products"><button className={classes.Button}><span style={{fontSize:"20px"}}>Start Shopping</span></button></Link> 
                </div>
            </div>
        </Container>
    )
}

export default EmptyCart;
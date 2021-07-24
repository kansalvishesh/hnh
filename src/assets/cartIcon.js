import React,{useEffect, useState} from "react";
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';


const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
    fontWeight:'bold'
  },
}))(Badge);

const CartIcon=(props)=> {

  return (
    <>
    {
     <Link to="/cart"> 
      <IconButton aria-label="cart">
        <StyledBadge badgeContent={props.count} id="iconHover">
          <ShoppingCartIcon  />
        </StyledBadge>
      </IconButton>
      </Link>  
}        
        </>
      )
}
export default CartIcon;

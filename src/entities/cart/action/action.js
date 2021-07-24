import * as actionType from '../../actionTypes';

export const cartSave = (data)=>{
    return dispatch=>{
        console.log("xx",data)
        dispatch({
            type: actionType.CART_SUCCESS,
            payload:data
        })

    }
}

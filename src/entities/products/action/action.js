import * as actionType from '../../actionTypes';

export const productsSave = (data)=>{
    return dispatch=>{
        console.log("xx",data)
        dispatch({
            type: actionType.PRODUCTS_SUCCESS,
            payload:data
        })

    }
}

import * as actionType from '../../actionTypes';

const INIT_STATE = {
    cart:[]
}
 

const reducer = (state=INIT_STATE,action)=>{
    switch(action.type){
        case actionType.CART_SUCCESS:
            return{...state,cart:action.payload}
        default:
            return state;    

    }
}

export default reducer;
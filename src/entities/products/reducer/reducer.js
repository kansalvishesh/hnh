import * as actionType from '../../actionTypes';

const INIT_STATE = {
    products:[]
}
 

const reducer = (state=INIT_STATE,action)=>{
    switch(action.type){
        case actionType.PRODUCTS_SUCCESS:
            return{...state,products:action.payload}
        default:
            return state;    

    }
}

export default reducer;
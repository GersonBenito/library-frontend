import { types } from "../types/types";


export const setBookReducer = (state = {}, action) =>{
    switch(action.type){
        case types.SET_BOOK:
            
            return [action.payload];
        default:
            return state;
    }
}
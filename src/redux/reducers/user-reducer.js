import { types } from "../types/types";


export const setUserReducer = (state = {}, action) =>{
    switch(action.type){
        case types.SET_USER:
            return { 
                id_user: action.payload.id_user,
                id_role: action.payload.id_role,
                firstname: action.payload.firstname,
                lastname: action.payload.lastname,
                email: action.payload.email,
                role: action.payload.role
            }
        default: 
            return state;
    }
}




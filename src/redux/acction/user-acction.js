import { types } from "../types/types"

export const setUser = (user) =>({
    type: types.SET_USER, 
    payload: user
})
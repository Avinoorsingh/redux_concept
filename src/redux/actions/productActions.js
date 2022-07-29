import { ActionTypes } from "../constants/action-types"

export const setProducts=(products)=>{
    return {
        type: ActionTypes.SET_PRODUCTS,//type of action you want to perform
        payload:products, //data //products that we are getting
    }
}
//action always return a plain javascript object which has the key as a type and a payload.

export const selectedProduct=(product)=>{
    return {
        type: ActionTypes.SELECTED_PRODUCT,//type of action you want to perform
        payload:product, //data //products that we are getting
    }
}

export const removeSelectedProduct=(product)=>{
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,//type of action you want to perform
    }
}
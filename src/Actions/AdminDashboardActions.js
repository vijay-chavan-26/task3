import {
    INCREMENT_ID,
    ADD_PODUCT,
    UPDATE_PODUCT,
    REMOVE_PODUCT,
    REMOVE_ALL_PODUCT,
  } from "../Components/Constants";

export const incrementIdOfProduct = () =>{
    return{
        type: INCREMENT_ID
    }
}
export const handleAddProduct = (product) =>{
    return{
        type: ADD_PODUCT,
        product
    }
}
export const handleUpdateProduct = (id, updatedProduct) =>{
    return{
        type: UPDATE_PODUCT,
        id,
        updatedProduct
    }
}
export const handleRemoveProduct = (id) =>{
    return{
        type: REMOVE_PODUCT,
        id
    }
}
export const handleRemoveAllProduct = () =>{
    return{
        type: REMOVE_ALL_PODUCT
    }
}
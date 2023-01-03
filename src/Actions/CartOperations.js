import { INCREMENT_CART_COUNT, DECREMENT_CART_COUNT, ADD_CART_PODUCT, SUBTRACT_CART_PODUCT, REMOVE_CART_PODUCT, REMOVE_ALL_CART_PODUCT, INCREMENT_CART_TOTAL_AMOUNT, DECREMENT_CART_TOTAL_AMOUNT } from "../Components/Constants"

export const handleCartCountIncrement = () =>{
    return{
        type: INCREMENT_CART_COUNT
    }
}

export const handleCartCountDecrement = (qty) =>{
    return{
        type: DECREMENT_CART_COUNT,
        qty
    }
}
export const handleCartTotalAmountIncrement = (price) =>{
    return{
        type: INCREMENT_CART_TOTAL_AMOUNT,
        price
    }
}

export const handleCartTotalAmountDecrement = (price) =>{
    return{
        type: DECREMENT_CART_TOTAL_AMOUNT,
        price
    }
}

export const handleAddCartProduct = (product) =>{
    return{
        type: ADD_CART_PODUCT,
        product
    }
}

export const handleSubtractCartProduct = (product) =>{
    return{
        type: SUBTRACT_CART_PODUCT,
        product
    }
}
// export const handleUpdateCartProduct = (id, updatedProduct) =>{
//     return{
//         type: UPDATE_PODUCT,
//         id,
//         updatedProduct
//     }
// }
export const handleRemoveCartProduct = (id) =>{
    return{
        type: REMOVE_CART_PODUCT,
        id
    }
}
export const handleRemoveAllCartProduct = () =>{
    return{
        type: REMOVE_ALL_CART_PODUCT
    }
}
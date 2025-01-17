//for Add Item to Cart
export const addCart = (product) => {
    return{
        type: "ADDITEM",
        payload: product
    }
}

//for Delete Item from Cart
export const deleteCart = (product) => {
    return{
        type: "DELITEM",
        payload: product
    }
}


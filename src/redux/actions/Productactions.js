import fakestoreapi from "../../api/fakestoreapi";
import { Actiontypes } from "../actiontypes/Actiontypes";

export const fetchProducts = () => {
    return async(dispatch) => {
        const response = await fakestoreapi.get("/products");
        dispatch({ type: Actiontypes.FETCH_PRODUCTS, payload: response.data });
    };
};

export const fetchProduct = (id) => {
    return async(dispatch) => {
        const response = await fakestoreapi.get(`/products/${id}`);
        dispatch({ type: Actiontypes.SELECTED_PRODUCTS, payload: response.data });
    };
};

export const removeSelectedProducts = () => {
    return {
        type: Actiontypes.REMOVE_SELECTED_PRODUCTS,
    };
};

export const addtocart = (itemId) => {
    return {
        type: Actiontypes.ADD_TO_CART,
        payload: {
            id: itemId,
        },
    };
};

export const deletefromcart = (itemId) => {
    return {
        type: Actiontypes.REMOVE_FROM_CART,
        payload: {
            id: itemId,
        },
    };
};

export const adjustqty = (itemId, value) => {
    return {
        type: Actiontypes.ADJUST_QTY,
        payload: {
            id: itemId,
            qty: value,
        },
    };
};

export const currentitem = (item) => {
    return {
        type: Actiontypes.LOAD_CURRENT_ITEM,
        payload: item,
    };
};
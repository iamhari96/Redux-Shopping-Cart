import { Actiontypes } from "../actiontypes/Actiontypes";

const initialState = {
    product: [],
    loading: true,
    cart: [],
};

export const productReducers = (state = initialState, { type, payload }) => {
    switch (type) {
        case Actiontypes.FETCH_PRODUCTS:
            return {...state, loading: false, product: payload };
        case Actiontypes.ADD_TO_CART:
            const item = state.product.find((prod) => prod.id === payload.id);
            const Incart = state.cart.find((item) =>
                item.id === payload.id ? true : false
            );
            return {
                ...state,
                cart: Incart ?
                    state.cart.map((item) =>
                        item.id === payload.id ? {...item, qty: item.qty + 1 } : item
                    ) :
                    [...state.cart, {...item, qty: 1 }],
            };
        case Actiontypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== payload.id),
            };
        case Actiontypes.ADJUST_QTY:
            return {
                ...state,
                cart: state.cart.map((item) =>
                    item.id === payload.id ? {...item, qty: +payload.qty } : item
                ),
            };
        case Actiontypes.LOAD_CURRENT_ITEM:
            return {
                ...state,
                currentItem: payload,
            };
        default:
            return state;
    }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case Actiontypes.SELECTED_PRODUCTS:
            return {...state, loading: false, ...payload };
        case Actiontypes.REMOVE_SELECTED_PRODUCTS:
            return {};
        default:
            return state;
    }
};
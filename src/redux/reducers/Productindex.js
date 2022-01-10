import { combineReducers } from "redux";
import { productReducers, selectedProductReducer } from "./Productreducers";

const reducers = combineReducers({
    allProducts: productReducers,
    product: selectedProductReducer,
});

export default reducers;
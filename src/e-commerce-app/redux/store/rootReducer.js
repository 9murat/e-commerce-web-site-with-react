import { combineReducers } from "@reduxjs/toolkit";
import categorySlice from "../slices/categorySlice";
import productSlice from "../slices/productSlice";
import cartSlice from "../slices/cartSlice";


export const rootReducer = combineReducers({
    categorySlice: categorySlice,
    productSlice: productSlice,
    cartSlice: cartSlice,
});
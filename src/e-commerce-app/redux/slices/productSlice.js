import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { STATUS } from "../../utils/status";

const initialState = {
    products: [],
    productStatus: STATUS.IDLE,
    productDetail: [],
}


export const getProducts = createAsyncThunk(
    'getProducts', async () => {
        try {
            const { data } = await axios.get('https://fakestoreapi.com/products')
            return data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
)
export const getProductDetail = createAsyncThunk(
    'getProductDetail', async (id) => {
        try {
            const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`)
            return data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
)
export const getCategoryProduct = createAsyncThunk(
    'getCategoryProduct', async (category) => {
        try {
            const { data } = await axios.get(`https://fakestoreapi.com/products/category/${category}`)
            return data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
)
export const productSlice = createSlice({
    name: 'productSLice',
    initialState,
    extraReducers: (builder) => {
        // getProducts
        builder.addCase(getProducts.pending, (state) => {
            state.productStatus = STATUS.LOADING;
        })
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.products = action.payload;
            state.productStatus = STATUS.SUCCESS;
        })
        builder.addCase(getProducts.rejected, (state, action) => {
            state.productStatus = STATUS.FAIL;
        })
        // getProductDetail
        builder.addCase(getProductDetail.pending, (state) => {
            state.productStatus = STATUS.LOADING;
        })
        builder.addCase(getProductDetail.fulfilled, (state, action) => {
            state.productDetail = action.payload;
            state.productStatus = STATUS.SUCCESS;
        })
        builder.addCase(getProductDetail.rejected, (state) => {
            state.productStatus = STATUS.FAIL;
        })
        // getCategoryProduct
        builder.addCase(getCategoryProduct.pending, (state) => {
            state.productStatus = STATUS.LOADING;
        })
        builder.addCase(getCategoryProduct.fulfilled, (state, action) => {
            state.products = action.payload;
            state.productStatus = STATUS.SUCCESS;
        })
        builder.addCase(getCategoryProduct.rejected, (state, action) => {
            state.productStatus = STATUS.FAIL;
        })
    }
})


export default productSlice.reducer;
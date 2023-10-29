import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { STATUS } from "../../utils/status";

const initialState = {
    categories: [],
    categoryStatus: STATUS.IDLE,
}

export const getCategories = createAsyncThunk(
    'getCategories', async () => {
        try {
            const { data } = await axios.get('https://fakestoreapi.com/products/categories')
            return data;

        } catch (error) {
            throw error;
        }
    }
)
export const categorySlice = createSlice({
    name: 'categorySlice',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getCategories.pending, (state) => {
            state.categoryStatus = STATUS.LOADING;

        })
        builder.addCase(getCategories.fulfilled, (state, action) => {
            state.categories = action.payload;
            state.categoryStatus = STATUS.SUCCESS;
        })
        builder.addCase(getCategories.rejected, (state) => {
            state.categoryStatus = STATUS.FAIL;
        })
    }
})

export default categorySlice.reducer;
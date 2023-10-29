import { createSlice } from "@reduxjs/toolkit";

const fetchFromLocaleStorage = () => {
    let cart = localStorage.getItem('cart');
    if (cart) {
        return JSON.parse(localStorage.getItem('cart'));
    } else {
        return [];
    }
}

const storeInLocaleStorage = (data) => {
    localStorage.setItem('cart', JSON.stringify(data));
}

const initialState = {
    // carts: fetchFromLocaleStorage(),
    carts: [],
    itemCount: 0,
    totalAmount: 0,
    quantity: 0,

}
export const cartSlice = createSlice({
    name: 'cartSLice',
    initialState,
    reducers: {
        addToCart2: (state, action) => {
            const existItem = state.carts.find(item => item.id === action.payload.id);

            if (existItem) {
                existItem.quantity += action.payload.quantity;
                existItem.totalprice = existItem.quantity * existItem.price;

            } else {
                state.carts.push(action.payload);
            }
            state.totalAmount = state.carts.reduce((total, item) => total + item.totalprice, 0);
            // storeInLocaleStorage(state.carts);
        },

        removeFromCart: (state, action) => {
            const removeFoundItem = state.carts.filter(item => item.id !== action.payload.id);
            const newTotalAmount = state.totalAmount - removeFoundItem.price
            state.totalAmount = newTotalAmount;
            state.carts = removeFoundItem;
            // storeInLocaleStorage(state.carts);
        },
        clearAllCart: (state) => {
            state.carts = [];
            // storeInLocaleStorage(state.carts);
            state.totalAmount = 0;
        },
        getCartTotal: (state) => {
            state.totalAmount = state.carts.reduce((cartTotal, cartItem) => {
                return cartTotal += cartItem.price;
            }, 0)
            state.itemCount = state.carts.length;
        }
    },
})

export const { addToCart, setQuantity, decreaseQuantity, removeFromCart, clearAllCart, getCartTotal, addToCart2 } = cartSlice.actions;
export default cartSlice.reducer;




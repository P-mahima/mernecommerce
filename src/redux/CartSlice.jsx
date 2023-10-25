import { createSlice } from '@reduxjs/toolkit'
const initialState = JSON.parse(localStorage.getItem('cart')) ?? []
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            state.push(action.payload)
        },
        deleteFromCart(state, action) {
            return state.filter(item => item.id != action.payload.id);
        },
        orderPlaced: (state, action) => {
            state.cartItems = [];
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            toast.success("Order placed Successfully", {
              position: toast.POSITION.TOP_RIGHT,
            });
          },
        
    }
})

export const { addToCart, deleteFromCart,orderPlaced } = cartSlice.actions

export default cartSlice.reducer;
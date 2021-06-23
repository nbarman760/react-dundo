import {createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cartItems',
    initialState: {
        cartItems: []
    },
    reducers: { 
        addItems : (state, action) => {
            state.cartItems.push(action.payload)
        },
        removeItem : (state, action) =>{
            state.cartItems.slice(state.cart.length -2, 1 );
        }
    }
});
export const { addItems, removeItem } = cartSlice.actions

export default cartSlice.reducer
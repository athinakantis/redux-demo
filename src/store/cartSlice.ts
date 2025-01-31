import { createSlice } from '@reduxjs/toolkit';

import { CartState } from '../types/cart.types';

const initialState: CartState = {
    items: [],
    isOpen: false,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = state.items.find(
                (item) => item.id === action.payload.id
            );
            item
                ? item.quantity++
                : state.items.push({ ...action.payload, quantity: 1 });
        },
        removeFromCart: (state, action) => {
            const item = state.items.find(
                (item) => item.id === action.payload.id
            );

            item?.quantity === 1
                ? state.items.splice(state.items.indexOf(item), 1)
                : item!.quantity--;
        },
        toggleCart: (state) => {
            state.isOpen = !state.isOpen;
        },
    },
});

//Exporting the reducer function using cartSlice.actions
export const { addToCart, removeFromCart, toggleCart } = cartSlice.actions;
export default cartSlice.reducer;

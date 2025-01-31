import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Product } from '../types/product.types';
import axios from 'axios';

export const fetchProducts = createAsyncThunk(
    '/products/fetchProducts',
    async () => {
        const response = await axios.get<Product[]>(
            'https://fakestoreapi.com/products'
        );
        return response.data;
    }
);

const productsSlice = createSlice({
    name: 'products',
    initialState: [] as Product[],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (_, action) => {
            return action.payload;
        });
    },
});

export default productsSlice.reducer;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { Recipe } from '../types/recipe.types';

export const fetchRecipes = createAsyncThunk(
    '/recipes/fetchRecipes',
    async () => {
        const response = await axios.get<Recipe[]>(
            'https://dummyjson.com/recipes'
        );
        return response.data;
    }
);

export const recipeSlice = createSlice({
    name: 'recipes',
    initialState: {
        recipes: [] as Recipe[],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchRecipes.fulfilled, (_, action) => {
            return action.payload;
        });
    },
});

export default recipeSlice.reducer;

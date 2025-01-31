import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useAppDispatch } from '../hooks/hooks';
import { useEffect } from 'react';
import { fetchRecipes } from '../store/recipeSlice';
import { RecipeCard } from './RecipeCard';
import './Recipe.css';

export const Recipes = () => {
    const recipes = useSelector((state: RootState) => state.recipes.recipes);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchRecipes());
    }, [dispatch]);

    return (
        <div className='recipe-list'>
            {recipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)}
        </div>
    );
}
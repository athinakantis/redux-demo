import { Recipe } from '../types/recipe.types';

type RecipeCardProps = { recipe: Recipe; key: number };

export const RecipeCard = ({ recipe }: RecipeCardProps) => {
    const {
        name,
        image,
        ingredients,
        instructions,
        prepTimeMinutes,
        cookTimeMinutes,
        caloriesPerServing,
        servings,
        tags,
        difficulty,
        mealType,
    } = recipe;

    return (
        <div className='recipe-card'>
            <img src={image} alt='' />
            <div className='recipe-details'>
                <p className='recipe-name'>{name}</p>
                <p>Time to make: {cookTimeMinutes} minutes</p>
                <div className='meal-type-tags'>
                    {mealType.map((type) => (
                        <button className={type.toLowerCase()}>{type}</button>
                    ))}
                </div>
            </div>
        </div>
    );
};

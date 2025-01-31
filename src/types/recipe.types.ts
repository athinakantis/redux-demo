export interface Recipe {
    id: number;
    name: string;
    ingredients: string[];
    instructions: string[];
    prepTimeMinutes: number;
    cookTimeMinutes: number;
    caloriesPerServing: number;
    servings: number;
    tags: string[];
    difficulty: 'Easy' | 'Medium' | 'Hard';
    mealType: string[];
    image: string;
}

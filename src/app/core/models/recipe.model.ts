import { Ingredient } from "./ingredient.model";

export interface Recipe {
    name: string;
    description: string;
    ingredients: Ingredient[];
    imagePath: string;
}
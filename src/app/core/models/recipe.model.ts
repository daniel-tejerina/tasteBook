import { Ingredient } from "./ingredient.model";

export interface Recipe {
    _id?: string,
    name: string;
    description: string;
    ingredients: Ingredient[];
    imagePath: string;
}
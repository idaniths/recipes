import recipeModel from "./models/recipeModel";

export const getAllRecipes = async () => {
    return await recipeModel.find();
}
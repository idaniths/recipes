import recipeModel from "./models/recipeModel";

export const getAllcategory = async () => {
    return await recipeModel.find().distinct('category');
}

export const getRecipesByCategory = async (category: string) => {
    return await recipeModel.find({category: category});
}
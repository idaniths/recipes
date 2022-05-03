import recipeModel from "./models/recipeModel";

export const getAllcategory = async () => {
    return await recipeModel.find().distinct('category');
}
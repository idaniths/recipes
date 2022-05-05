import recipeModel from "./models/recipeModel";

export const getAllRecipes = async () => {
    return await recipeModel.find();
}

export const getRecipeByQuery = async (query: any) => {
    return await recipeModel.find(
        {"title" :{ '$regex' : query.search, '$options' : "i"} });
    
}

export const getRecipeById = async (id: string) => {
    return await recipeModel.findById(id);
}

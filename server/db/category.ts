import recipeModel from "./models/recipeModel";

export const getAllcategory = async () => {
    return await recipeModel.find().distinct('category');
}

export const getRecipesByCategory = async (category: string) => {
    return await recipeModel.find({category: category});
}


export const getRecipesByCategoryQuery = async (query: any) => {
    return await recipeModel.find(
        {"category" :{ '$regex' : query.search, '$options' : "i"} });
        
}
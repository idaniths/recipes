import recipeModel from "./models/recipeModel";

export const getAllcategory = async () => {
    // return await recipeModel.find().distinct('category');
    const categories = await recipeModel.aggregate([
        { $match: {} },
        { $unwind: '$category' },
        { $group: { _id: '$category', count: { $sum: 1 } } },
        { $sort: { count: -1 } }
    ]);
    return categories
}

export const getRecipesByCategory = async (category: string) => {
    return await recipeModel.find({category: category});
}


export const getRecipesByCategoryQuery = async (params: string, query: any) => {
    const recipes = await recipeModel.find(
        {category: params, 
            title: { $regex: query, $options: 'i' }});

    return recipes;   
}
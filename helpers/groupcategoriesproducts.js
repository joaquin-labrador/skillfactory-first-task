import categories from "../model/model.categories.js";
const grouper = async (responseCategory) => {
    let categoriesAndProducts = await Promise.all(
        responseCategory.map(async (category) => {
            return { category, products: await categories.getProductByCategory(category) }
        })
    );
    return categoriesAndProducts;
}

export default grouper;
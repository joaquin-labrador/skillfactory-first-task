import littleProducts from "./littleproducts.js";
const sortProduct = (products, sortBy) => {
    let shortProducts = littleProducts(products);
    if (sortBy === "desc"){
        return shortProducts.sort((a, b) => a.price - b.price);
    }
    return shortProducts.sort((a, b) =>  b.price - a.price);
}
export default sortProduct;
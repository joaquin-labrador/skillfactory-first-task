const littleProducts = (products) => {
    let littleProducts = products.map(product => {
        return {
            price : product.price,
            title : product.title,
            id : product.id,  
        };
    });
    return littleProducts;
}

export default littleProducts;
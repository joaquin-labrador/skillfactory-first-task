const getMostExpensiveByCategory = (categories) => {
  const mostExpensive = categories.map((category) => {
    let productExpensive = category.products.reduce((old, act) => {
      return old.price > act.price ? old : act;
      //redusco mi array de productos al mas caro de cada categoria
    });
    return {
      category: category.category,
      moreExpesive: productExpensive,
    };
  });
  return mostExpensive;
};
export default getMostExpensiveByCategory;

/*el metodo reduce selecciona el mas caro del arreglo de productos,
que esta dentro del un objeto categorias,
que el mismo esta dentro de un arreglo de categorias*/

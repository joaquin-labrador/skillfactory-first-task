import modelUser from "../model/model.user.js";



const getBigCarts = async (carts) => {
    let users = await modelUser.getAllUsers();
    const MIN_LEGTH = 2;
    let bigCarts = carts.filter((cart) => {
        //aprovecho el callback para filtrar los usuarios que tienen mas de 2 productos 
        if (cart.products.length > MIN_LEGTH) {
            //agregar el usatio por carts.userID
            let user = users.find((user) =>  cart.userId === user.id);
            //agregar el usatio por carts.userID
            cart.user = user.name;
            return cart;
        }
    });

    return bigCarts;
}

export default getBigCarts;
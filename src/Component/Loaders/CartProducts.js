import { getShoppingCart } from "../../utilities/fakedb";

const cartProductsLOADER = async () => {
    const loadedProducts = await fetch('http://localhost:5000/products');
    const products = await loadedProducts.json();

    const storeCart = getShoppingCart();
    const savedCart = [];

    for(const id in storeCart){
        const addedProduct = products.find(pd => pd._id === id);
        if(addedProduct){
            const quantity = storeCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
    }

    
    return savedCart;
}

export default cartProductsLOADER;
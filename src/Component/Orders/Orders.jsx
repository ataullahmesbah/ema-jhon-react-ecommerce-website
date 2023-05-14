import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';
import ReviewItems from '../ReviewItems/ReviewItems';
import './Orders.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const saveCart = useLoaderData();
    const [cart, setCart] = useState(saveCart);

    const handleRemoveCart = (id) => {
            const remaining = cart.filter(product => product._id !== id);
            setCart(remaining);
            removeFromDb(id)

    }

    const handleClearCart = () =>{
        setCart([]);
        deleteShoppingCart();
    }
 
    return (
        <div className='shop-container'>
            <div className="review-container">
            {
                cart.map(product => <ReviewItems
                key={product._id}
                product={product}
                handleRemoveCart={handleRemoveCart}
                >

                </ReviewItems>)
            }
            </div>
            <div className="cart-container">
                <Cart cart={cart}
                handleClearCart={handleClearCart}
                >
                 <Link className='proceed-link' to="/checkout">
                    <button className='btn-proceed'>Proceed Checkout</button>
                    </Link> 
                </Cart>
            </div>
        </div>
    );
};

export default Orders;
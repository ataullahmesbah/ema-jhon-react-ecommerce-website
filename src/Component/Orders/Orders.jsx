import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';
import ReviewItems from '../ReviewItems/ReviewItems';
import './Orders.css'
import { removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const saveCart = useLoaderData();
    const [cart, setCart] = useState(saveCart);

    const handleRemoveCart = (id) => {
            const remaining = cart.filter(product => product.id !== id);
            setCart(remaining);
            removeFromDb(id)

    }
 
    return (
        <div className='shop-container'>
            <div className="review-container">
            {
                cart.map(product => <ReviewItems
                key={product.id}
                product={product}
                handleRemoveCart={handleRemoveCart}
                >

                </ReviewItems>)
            }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { RootState } from '../store/store';
import './Cart.css';
import { addToCart, removeFromCart, toggleCart } from '../store/cartSlice';

const Cart = () => {
    const dispatch = useAppDispatch();
    const { items, isOpen } = useAppSelector((state: RootState) => state.cart);

    return (
        <div id='cart-container' className={`cart${isOpen ? '-open' : ''}`}>
            {!isOpen ? (
                <button id='open-cart' onClick={() => dispatch(toggleCart())}>
                    Open Cart
                </button>
            ) : (
                <>
                    <h2>Cart</h2>

                    {items.length > 0 &&
                        items.map((item) => (
                            <div key={item.id} className='cart-item'>
                                <div className="cart-item-details">

                                <p className='title'>{item.title}</p>
                                <p>€{item.price * item.quantity}</p>
                                <p>Amount: {item.quantity}</p>
                                </div>
                                <div className="cart-item-actions">
                                    <button onClick={() => dispatch(addToCart(item))}>+</button>
                                    <button onClick={() => dispatch(removeFromCart(item))}>-</button>
                                </div>
                            </div>
                        ))}

                    <p>Total: €</p>
                    <button onClick={() => dispatch(toggleCart())}>
                        Close
                    </button>
                </>
            )}
        </div>
    );
};

export default Cart;

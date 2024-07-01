import React from 'react';
import './ShoppingCart.css';

const ShoppingCart = ({ cartItems, onRemoveFromCart }) => {
  // Calculate the total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul className="cart-items-list">
            {cartItems.map(item => (
              <li key={item.id} className="cart-item">
                <span>{item.title}</span>
                <span>${item.price.toFixed(2)}</span>
                <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <h3>Total Price: ${totalPrice}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;

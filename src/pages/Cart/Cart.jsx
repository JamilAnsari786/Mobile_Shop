import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { StoreContext } from '@/components/context/StoreContext';
import './Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart, addToCart } = useContext(StoreContext);
  const navigate = useNavigate(); // ✅ Step 1: Import useNavigate

  const items = Object.values(cartItems);
  const hasItems = items.length > 0;
  const deliveryFee = hasItems ? 50 : 0;
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const grandTotal = total + deliveryFee;

  return (
    <div className="cart-container">
      <h2 className="cart-heading">🛒 Your Cart</h2>

      {!hasItems ? (
        <p className="cart-empty">Your cart is empty.</p>
      ) : (
        <div className="cart-list">
          {items.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-left">
                <img src={item.image} alt={item.name} />
                <div className="cart-item-details">
                  <h4>{item.name}</h4>
                  <p>Price: ₹{item.price}</p>
                  <p>Total: ₹{item.price * item.quantity}</p>
                </div>
              </div>

              <div className="quantity-controls">
                <button onClick={() => removeFromCart(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => addToCart(item)}>+</button>
              </div>
            </div>
          ))}

          <div className="cart-summary">
            <div className="cart-summary-row">
              <span>Subtotal:</span>
              <span>₹{total}</span>
            </div>
            <div className="cart-summary-row">
              <span>Delivery Fee:</span>
              <span>₹{deliveryFee}</span>
            </div>
            <div className="cart-summary-row grand">
              <strong>Total:</strong>
              <strong>₹{grandTotal}</strong>
            </div>

            {/* ✅ Step 2: Navigate to PlaceOrder page */}
            <button className="checkout-btn" onClick={() => navigate('/placeorder')}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

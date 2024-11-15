import React from 'react';
import { useDispatch } from 'react-redux';
import { updateQuantity, removeItem } from './cartSlice';

const CartItem = ({ cartItems, onContinueShopping }) => {
  const dispatch = useDispatch();

  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.quantity * item.cost, 0);
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.id));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.id));
  };

  const handleContinueShopping = () => {
    onContinueShopping();
  };

  const handleCheckoutShopping = () => {
    alert('Functionality to be added for future reference');
  };

  return (
    <div>
      <h2>Total Cart Amount: ${calculateTotalAmount()}</h2>
      {cartItems.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p>${item.cost}</p>
          <div>
            <button onClick={() => handleDecrement(item)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => handleIncrement(item)}>+</button>
          </div>
          <p>Total: ${calculateTotalCost(item)}</p>
          <button onClick={() => handleRemove(item)}>Delete</button>
        </div>
      ))}
      <button onClick={handleContinueShopping}>Continue Shopping</button>
      <button onClick={handleCheckoutShopping}>Checkout</button>
    </div>
  );
};

export default CartItem;

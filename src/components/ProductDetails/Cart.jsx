import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addCart, deleteCart } from '../../redux/action/action';
// import { addCart, deleteCart } from '../redux/action/action';

const Cart = () => {
  const cartItems = useSelector((state) => state.handleCart || []); // Access cart items from state
  const dispatch = useDispatch();
  console.log(cartItems)

  const handleButton = (product, actionType) => {
    if (actionType === 'increase') {
      dispatch(addCart(product));
    } else if (actionType === 'decrease') {
      dispatch(deleteCart(product));
    }
  };

  return (
    <div className="container py-5">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((product) => (
            
          <div key={product.id} className="row my-4 border p-3">
            <div className="col-md-4">
              <img
                src={product.image}
                // alt={product.title}
                height="200px"
                width="180px"
              />
            </div>
            <div className="col-md-4">
              <h3>{product.title}</h3>
              <p className="lead fw-bold">
                {product.qty} x ${product.price} = ${product.qty * product.price}
              </p>
              <button
                className="btn btn-outline-dark me-2"
                onClick={() => handleButton(product, 'decrease')}
              >
                <i className="fa fa-minus"></i>
              </button>
              <button
                className="btn btn-outline-dark"
                onClick={() => handleButton(product, 'increase')}
              >
                <i className="fa fa-plus"></i>
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;

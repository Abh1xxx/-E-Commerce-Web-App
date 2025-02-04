import { useSelector, useDispatch } from 'react-redux';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Cards from '../Components/Cards';
import { clearCart } from '../features/cart/cartSlice'; // Import the clearCart action

function Cartsidepage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.value);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <>
      <Button variant="warning" onClick={handleShow} className="p-1 rounded-0">
        View Cart ({cartItems.length})
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <div className="d-flex justify-content-between w-100">
            <Offcanvas.Title>Cart Items</Offcanvas.Title>
            {cartItems.length > 0 && (
              <Button 
                variant="danger" 
                size="sm" 
                onClick={() => dispatch(clearCart())}
              >
                Clear Cart
              </Button>
            )}
          </div>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cartItems.length > 0 ? (
            <>
              <ul className="list-group">
                {cartItems.map((item, index) => (
                  <div
                    key={index}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    <Cards data={item} />
                  </div>
                ))}
              </ul>

              <div className="mt-3">
                <h5>Total: ${totalPrice.toFixed(2)}</h5>
              </div>

              <div className="d-grid mt-3">
                <Button variant="success" size="lg">
                  Buy Now
                </Button>
              </div>
            </>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Cartsidepage;
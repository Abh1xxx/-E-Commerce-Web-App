import axios from 'axios';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removefromcart } from '../features/cart/cartSlice';

export async function getproductdetails({ params }) {
  console.log(params);

  try {
    const product = await axios.get(`https://fakestoreapi.com/products/${params.id}`);
    console.log(product);
    return product.data;
  } catch (error) {
    console.log('An error occurred -->', error);
  }
}

function ProductDetails() {
  const product = useLoaderData();
  console.log('Product data from useLoaderData() -->', product);

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.value);

  // Check if the product is already in the cart
  const isInCart = cartItems.some((item) => item.id === product.id);

  return (
    <div className="container my-5">
      <div className="row g-4">
        <div className="col-md-6 viewDetailscardimg">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="col-md-6">
          <h2>{product.title}</h2>
          <p className="text-muted">{product.category}</p>
          <p>{product.description}</p>
          <h3 className="text-primary">${product.price}</h3>

          {/* Add to Cart/Remove from Cart Button */}
          {isInCart ? (
            <Button
              variant="danger"
              className="p-2 rounded-0"
              onClick={() => dispatch(removefromcart(product))}
            >
              Remove 
            </Button>
          ) : (
            <Button
              variant="warning"
              className="p-2 rounded-0"
              onClick={() => dispatch(addToCart(product))}
            >
              Add to Cart
            </Button>
          )}

          {/* Buy Now Button */}
          <Button variant="success" className="p-2 rounded-0 ms-3">
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;

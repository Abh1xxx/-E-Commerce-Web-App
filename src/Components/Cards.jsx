import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removefromcart } from '../features/cart/cartSlice';

function Cards({ data }) {
  const dispatch = useDispatch();
  const Cartitem = useSelector((state) => state.cart.value);

  return (
    <Card className="h-100 cards">
      <Card.Img variant="top" src={data.image} className="productimage" />
      <Card.Body>
        <Card.Title className="fw-bold text-truncate">{data.title}</Card.Title>
        <Card.Text className="text-muted">{data.description.slice(0, 100)}...</Card.Text>
      </Card.Body>
      <div className="p-3 d-flex justify-content-between align-items-center">
        <p className="mb-0 fw-bold text-primary">${data.price}</p>
        <div className="d-flex gap-2">
          <Link to={`productdetails/${data.id}`}>
            <Button variant="primary" className="p-1 rounded-0">
              View Details
            </Button>
          </Link>
          {Cartitem.some((product) => product.id === data.id) ? (
            <Button
              variant="danger"
              className="p-1 rounded-0"
              onClick={() => dispatch(removefromcart(data))}
            >
              Remove
            </Button>
          ) : (
            <Button
              variant="warning"
              className="p-1 rounded-0"
              onClick={() => dispatch(addToCart(data))}
            >
              Add to Cart
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}

export default Cards;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './style.css';

// Redux actions
import { getProducts } from '../../redux/products/ProductSlice';

const Products = () => {
  const dispatch = useDispatch();

  // Component did mount
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  // Redux data store
  const { products } = useSelector((state) => state.productSlice);

  // console.log('products', products);
  return (
    <div className="d-flex">
      {products.map((item, idx) => (
        <Card key={idx} style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{item.price}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Products;

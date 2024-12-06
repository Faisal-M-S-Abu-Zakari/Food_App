import React from 'react';
import {  Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => (
  <Col lg={3} md={6} sm={12} className="my-2">
  <Card className="fixed-height-card" style={{ width: '15rem' }}>
    <Link
     to={`/productdetailes/${product.recipe_id}`} 
     className="card-img-link">
      <Card.Img
        variant="top"
        src={product.image_url}
        alt={product.title}
        className="card-img"
      />
    </Link>
    <Card.Body className="card-body text-center">
      <Card.Title className="card-title mb-2">{product.title}</Card.Title>
      <Card.Text className="card-text text-muted mb-3">{product.publisher}</Card.Text>
      <Link
        to={`/productdetailes/${product.recipe_id}`}
        className="btn btn-dark"
        style={{ fontSize: '0.9rem', borderRadius: '8px' }}
      >
        Recipe Details
      </Link>
    </Card.Body>
  </Card>
</Col>

);

export default ProductCard;

import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ProductCard from '../utilites/ProductCard';
import { useSelector } from 'react-redux';

const Favourite = () => {
  const favProducts = useSelector((state) => state.Products.Fav);

  if (favProducts.length === 0) {
    return (
      <Container className="py-5 text-center" >
        <h3 className="fw-bold ">Your Favourite List is Empty</h3>
        <p className="text-muted my-3">Start adding some recipes to your favourites!</p>
      </Container>
    );
  }

  return (
    <Container >
      <Row>
        {favProducts.map((product) => (
          <ProductCard product={product} key={product.recipe_id} />
        ))}
      </Row>
    </Container>
  );
};

export default Favourite;

import React, { useEffect, useState } from 'react';
import {  Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { addToFavourite, removeFromFavourite } from '../Slices/Products';

const ProductDetails = () => {
    const { id } = useParams(); // Extract the recipe ID from the URL
    const [product, setProduct] = useState(null);
    const dispatch = useDispatch()
    const [exist ,setExist] = useState(false)
    const favProducts = useSelector((state) => state.Products.Fav);

    useEffect(() => {
        // Fetch product details using Forkify API
        fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`)
            .then(response => {
                return response.json();
            })
            .then(data => setProduct(data.recipe))
    }, [id]);

    // Sync the `exist` state with the Redux state
    useEffect(() => {
        const isInFavorites = favProducts.some((fav) => fav.recipe_id === id);
        setExist(isInFavorites);
    }, [favProducts, id]);

    
    // Handle button click to add or remove from favorites
    const handelClick = () => {
        if (exist) {
            dispatch(removeFromFavourite(product.recipe_id)); // Remove from favorites in Redux
        } else {
            dispatch(addToFavourite(product)); // Add to favorites in Redux
        }
        setExist(!exist); // Toggle local `exist` state
    };
    if (!product) {
        return <p>Loading product details...</p>;
    }
    return (
        <Container className='py-3 my-2 '>
          <Row className="d-flex align-items-center my-5">
              <Col lg={6} md={12} className="text-center mb-4 mb-lg-0">
                <img
                  src={product.image_url}
                  alt={product.title}
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                    borderRadius: '15px',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                  }}
                />
              </Col>
              <Col lg={6} md={12} className="text-md-start text-center">
                <span
                  className="card-text text-muted d-block mb-2"
                  style={{ fontSize: '0.9rem', letterSpacing: '0.5px' }}
                >
                  {product.publisher}
                </span>
                <h3 className="fw-bold my-3 fs-2">{product.title}</h3>
                <Link
                  className="btn btn-dark my-3 px-4 py-2"
                  style={{
                    fontSize: '1rem',
                    borderRadius: '8px',
                    boxShadow: '0 3px 8px rgba(0, 0, 0, 0.1)',
                    textTransform: 'uppercase',
                  }}
                  onClick={handelClick}
                >
                  {exist ? `Remove From Favourite` :`Add to Favourites` }
                </Link>
                <h5 className="fw-bold mt-4">Ingredients:</h5>
                <ul
                  style={{
                    listStyleType: 'disc',
                    marginLeft: '20px',
                    paddingLeft: '10px',
                    fontSize: '1rem',
                    lineHeight: '1.8',
                    color: '#555',
                  }}
                >
                  {product.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </Col>
          </Row>

        </Container>
    );
};

export default ProductDetails;

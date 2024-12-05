import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../Slices/Products';
import ProductCard from '../utilites/ProductCard';
import { Row, Container } from 'react-bootstrap';


const Home = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.search.value);
  const products = useSelector((state) => state.Products.recipes);

  useEffect(() => {
    if (searchValue) {
      dispatch(fetchProducts(searchValue)); // Fetch products based on search value
    }
  }, [searchValue, dispatch]);

  return (
    <div>
      {products.length === 0 ? (
        <h1 className="fs-3 fw-bold text-center my-4">Nothing to show. Please search something!</h1>
      ) : (
        <Container>
          <Row>
            {products.map((product) => (
              <ProductCard product={product} key={product.recipe_id} />
            ))}
          </Row>
        </Container>
      )}
    </div>
  );
};

export default Home;

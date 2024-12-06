import { useState } from 'react'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../Slices/Products';
import ProductCard from '../utilites/ProductCard';
import { Row, Container } from 'react-bootstrap';
import LoadingSpinner from '../components/LoadingSpinner';
const ProductsPage = () => {
    const dispatch = useDispatch();
    const searchValue = useSelector((state) => state.search.value);
    const products = useSelector((state) => state.Products.recipes);
    const [loading, setLoading] = useState(true);
    const [isFetch , setIsFetch] = useState(false)
    useEffect(() => {
        if (searchValue) {
            setIsFetch(true)
            setLoading(true);
            dispatch(fetchProducts(searchValue)).finally(()=>{
                setLoading(false)
            })
        }
    }, [searchValue, dispatch]);

    if(isFetch){
        if (loading) {
            return <LoadingSpinner />; // Show the spinner while loading
        }
    }
    if (products.length === 0) {
        return (
        <Container className="py-5 text-center">
            <h3 className="fw-bold ">Your Product List is Empty</h3>
            <p className="text-muted my-3">Start Searching for some recipes 😋</p>
        </Container>
        );
    }
    return (
        <Container className='productPage'>
            <Row>
                {products.map((product) => (
                <ProductCard product={product} key={product.recipe_id} />
                ))}
            </Row>
        </Container>
    )
}

export default ProductsPage

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getValue } from "../Slices/searchProduct";
import { Navbar, Container, Form, Button, Nav } from "react-bootstrap";

function NavBar() {
  const searchValue = useSelector((state) => state.search.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState(searchValue);

  const handleChange = (event) => {
    setInput(event.target.value); // Update local input state
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getValue(input)); // Update search value in Redux
    navigate('/Products'); // Navigate to the Home page where data will be displayed
  };

  return (
    <Navbar expand="lg" className="bg-transparent">
      <Container fluid className="d-flex flex-row justify-content-between">
        <Link to="/" className="navbar-brand" style={{
          fontSize: '2rem',
          fontFamily: 'Merriweather, serif',
          fontWeight: '700',
          color: '#2c3e50',
          background: 'linear-gradient(135deg, #a8c686 0%, #efd8b1 100%)',
          padding: '10px 20px',
          borderRadius: '25px',
          textDecoration: 'none',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          transition: 'all 0.3s ease',
          textTransform: 'uppercase'
        }} 
        onMouseOver={(e) => e.target.style.opacity = 0.8}
        onMouseOut={(e) => e.target.style.opacity = 1}
        >
          FoodRecip
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex search" onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              placeholder="Enter Items"
              className="me-2"
              aria-label="Search"
              value={input}
              onChange={handleChange}
              style={{
                backgroundColor: '#fff',
                fontFamily: 'Merriweather, serif',
                fontSize: '1.1rem',
                color: '#2c3e50',
                border: '2px solid #d6a4a4',
                borderRadius: '25px',
                padding: '10px 15px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                outline: 'none',
                transition: 'all 0.3s ease',
              }}
              onFocus={(e) => e.target.style.border = '2px solid #fbc2eb'}
              onBlur={(e) => e.target.style.border = '2px solid #d6a4a4'}
            />
            <Button variant="outline-success" type="submit"
              onMouseOver={(e) => e.target.style.opacity = 0.8}
              onMouseOut={(e) => e.target.style.opacity = 1}
              style={{
                background: 'linear-gradient(135deg, #d6a4a4 0%, #fbc2eb 100%)',
                color: '#fff',
                fontFamily: 'Merriweather, serif',
                fontWeight: 'bold',
                fontSize: '1.2rem',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '25px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }} 
            >
              Search
            </Button>
          </Form>
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* Navigation Links with enhanced styles */}
            <Link 
              to="/" 
              className="text-black nav-link" 
              style={{
                fontSize: '1.1rem',
                fontWeight: '600',
                padding: '8px 15px',
                textDecoration: 'none',
                color: '#2c3e50',
                transition: 'all 0.3s ease',
                borderRadius: '10px'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#fbc2eb';
                e.target.style.color = '#2c3e50';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#2c3e50';
              }}
            >
              Home
            </Link>
            <Link 
              to="/Products" 
              className="text-black nav-link" 
              style={{
                fontSize: '1.1rem',
                fontWeight: '600',
                padding: '8px 15px',
                textDecoration: 'none',
                color: '#2c3e50',
                transition: 'all 0.3s ease',
                borderRadius: '10px'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#fbc2eb';
                e.target.style.color = '#2c3e50';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#2c3e50';
              }}
            >
              Products
            </Link>
            <Link 
              to="/Favourite" 
              className="text-black nav-link" 
              style={{
                fontSize: '1.1rem',
                fontWeight: '600',
                padding: '8px 15px',
                textDecoration: 'none',
                color: '#2c3e50',
                transition: 'all 0.3s ease',
                borderRadius: '10px'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#fbc2eb';
                e.target.style.color = '#2c3e50';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#2c3e50';
              }}
            >
              Favourite
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

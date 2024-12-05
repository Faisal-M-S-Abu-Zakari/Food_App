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
    navigate('/'); // Navigate to the Home page where data will be displayed
  };

  return (
    <Navbar expand="lg" className="bg-transparent">
      <Container fluid className="d-flex flex-row justify-content-between">
        <Link to="/" className="navbar-brand">FoodRecip</Link>
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
            />
            <Button variant="outline-success" type="submit">Search</Button>
          </Form>
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="/" className="text-black nav-link">Home</Link>
            <Link to="/Favourite" className="text-black nav-link">Favourite</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

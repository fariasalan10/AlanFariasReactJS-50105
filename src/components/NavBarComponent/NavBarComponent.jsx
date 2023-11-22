import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidgetComponent from "../CartWidgetComponent/CartWidgetComponent";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export const NavBarComponent = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => setCategories(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt="Apple-logo"
            src="../images/Apple-logo.png"
            width="29"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            iStore Córdoba
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link></Nav.Link>
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              {categories.map((Category, index) => {
                return (
                  <NavDropdown.Item key={index}>
                    <Link
                      to={`/Category/${Category}`}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      {Category}
                    </Link>
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Estoy buscando..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-primary">Buscar</Button>
          </Form>
          <CartWidgetComponent />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

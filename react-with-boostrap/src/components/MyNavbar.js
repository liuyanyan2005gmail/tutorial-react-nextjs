import React from 'react';
import { Navbar, Nav, Container, Form, FormControl, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const MyNavbar = () => {
    return (
        <Navbar bg="light" expand="lg" className="bg-body-tertiary rounded" aria-label="Eleventh navbar example">
            <Container fluid>
                <Navbar.Brand as={Link} to="/">MyNavbar</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarsExample09">
                    <span className="navbar-toggler-icon">
                        <i className="fa fa-bars"></i>
                    </span>
                </Navbar.Toggle>
                <Navbar.Collapse id="navbarsExample09">
                    <Nav className="me-auto mb-2 mb-lg-0">
                        <Nav.Item>
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/link1">Link1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/link2">Link2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Dropdown>
                                <Dropdown.Toggle as={Nav.Link} id="dropdown-basic" className="dropdown-toggle">
                                    Dropdown
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link} to="/action">Action</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/another-action">Another action</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/something-else">Something else here</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav.Item>
                    </Nav>
                    <Form className="d-flex" role="search">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MyNavbar;
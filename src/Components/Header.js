import React, { Component } from "react";
import { Container, FormControl, Nav, Navbar, Form, Button } from "react-bootstrap";

import logo from '../assets/kolesa-logo.svg'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Home from '../Pages/Home';
import Cars from '../Pages/Cars';
import Dealers from '../Pages/Dealers';
import Motorcycle from '../Pages/Motorcycle';
import WaterTransport from "../Pages/WaterTransport";


export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar sticky="top" collapseOnSelect expand="md" bg="light" variant="light" >
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                height="30"
                                width="70"
                                className="d-inline-block align-top"
                                alt="Logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/"> Kolesa </Nav.Link>
                                <Nav.Link href="/cars"> Cars </Nav.Link>
                                <Nav.Link href="/dealers"> Dealers </Nav.Link>
                                <Nav.Link href="/motorcycle"> Motorcycles </Nav.Link>
                                <Nav.Link href="/wtransport"> Water Transport </Nav.Link>

                            </Nav>
                            <Form inline >
                                <FormControl
                                    type="text"
                                    placeholder="Search"
                                    className="me-sm-2"
                                />

                            </Form>
                            <Button variant="outline-info">Search</Button>
                        </Navbar.Collapse>
                    </Container>

                </Navbar>

                <Router>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/cars" element={<Cars/>} />
                        <Route path="/dealers" element={<Dealers/>} />
                        <Route path="/motorcycle" element={<Motorcycle/>} />
                        <Route path="/wtransport" element={<WaterTransport/>} />
                    </Routes>
                </Router>
            </>
        )
    }
}
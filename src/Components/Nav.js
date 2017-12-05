import React, {Component} from 'react';
import {Col, Grid, Row, Navbar, Nav, NavItem, } from 'react-bootstrap';
import '../css/main.css';

export const Navigator = () => {
    return (
        <Navbar inverse collapseOnSelect fixedTop className="navigator">
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#header">React-Bootstrap</a>
                </Navbar.Brand>
                <Navbar.Toggle/>
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <NavItem eventKey={2} href="#about">About</NavItem>
                    <NavItem eventKey={3} href="#">Skills</NavItem>
                    <NavItem eventKey={3} href="#">Portfolio</NavItem>
                    <NavItem eventKey={4} href="#">Contact</NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

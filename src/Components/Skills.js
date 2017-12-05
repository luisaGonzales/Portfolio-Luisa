import React, {Component} from 'react';
import {Col, Grid, Row, Image} from 'react-bootstrap';
import '../css/main.css';

export const Skills = ({title}) => {
    return (
        <Row className="skills all">
            <Col md={12} sm={12} lg={12} xs={12}>
                <h1 className="titleSkills  text-center text-capitalize">{title}</h1>
            </Col>
            <Col md={6} sm={12} xs={12} lg={6}>
                <ul className="no-bullets">
                    <li>
                        <span className="ability-title">React</span>
                        <span className="ability-score">
                            <i className="fa fa-star filled" aria-hidden="true"></i>
                            <i className="fa fa-star filled" aria-hidden="true"></i>
                            <i className="fa fa-star filled" aria-hidden="true"></i>
                            <i className="fa fa-star filled" aria-hidden="true"></i>
                            <i className="fa fa-star filled" aria-hidden="true"></i>
                        </span>
                    </li>
                    <li>
                        <span className="ability-title">Redux</span>
                        <span className="ability-score">
                            <i className="fa fa-star filled" aria-hidden="true"></i>
                            <i className="fa fa-star filled" aria-hidden="true"></i>
                            <i className="fa fa-star filled" aria-hidden="true"></i>
                            <i className="fa fa-star filled" aria-hidden="true"></i>
                            <i className="fa fa-star-o" aria-hidden="true"></i>
                        </span>
                    </li>
                    <li>
                        <span className="ability-title">Javascript/ES6</span>
                        <span className="ability-score">
                            <i className="fa fa-star filled" aria-hidden="true"></i>
                            <i className="fa fa-star filled" aria-hidden="true"></i>
                            <i className="fa fa-star filled" aria-hidden="true"></i>
                            <i className="fa fa-star filled" aria-hidden="true"></i>
                            <i className="fa fa-star filled" aria-hidden="true"></i>
                        </span>
                    </li>
                    <li>
                        <span className="ability-title">jQuery</span>
                        <span className="ability-score">
                            <i className="fa fa-star filled" aria-hidden="true"></i>
                            <i className="fa fa-star filled" aria-hidden="true"></i>
                            <i className="fa fa-star filled" aria-hidden="true"></i>
                            <i className="fa fa-star filled" aria-hidden="true"></i>
                            <i className="fa fa-star filled" aria-hidden="true"></i>
                        </span>
                    </li>
                    <li>
                        <span className="ability-title">GitHub</span>
                        <span className="ability-score">
                            <i className="fa fa-star filled" aria-hidden="true"></i>
                            <i className="fa fa-star filled" aria-hidden="true"></i>
                            <i className="fa fa-star filled" aria-hidden="true"></i>
                            <i className="fa fa-star filled" aria-hidden="true"></i>
                            <i className="fa fa-star filled" aria-hidden="true"></i>
                        </span>
                    </li>
                </ul>
            </Col>
            <Col md={6} sm={12} xs={12} lg={6}>
                <ul className="no-bullets">
                    <li>
                        <span className="ability-title">HTML</span>
                        <span className="ability-score">
                            <i className="fa fa-star filled" aria-hidden="true"></i>
                            <i className="fa fa-star filled" aria-hidden="true"></i>
                            <i className="fa fa-star filled" aria-hidden="true"></i>
                            <i className="fa fa-star filled" aria-hidden="true"></i>
                            <i className="fa fa-star filled" aria-hidden="true"></i>
                        </span>
                    </li>
                    <li>
                        <span className="ability-title">CSS/SASS</span>
                        <span className="ability-score">
                            <i className="fa fa-star filled" aria-hidden="true"></i>
                            <i className="fa fa-star filled" aria-hidden="true"></i>
                            <i className="fa fa-star filled" aria-hidden="true"></i>
                            <i className="fa fa-star filled" aria-hidden="true"></i>
                            <i className="fa fa-star filled" aria-hidden="true"></i>
                        </span>
                    </li>
                    <li>
                        <span className="ability-title">Agile Driven Development</span>
                        <span className="ability-score">
                            <i className="fa fa-star filled" aria-hidden="true"></i>
                            <i className="fa fa-star filled" aria-hidden="true"></i>
                            <i className="fa fa-star filled" aria-hidden="true"></i>
                            <i className="fa fa-star filled" aria-hidden="true"></i>
                            <i className="fa fa-star filled" aria-hidden="true"></i>
                        </span>
                    </li>
                    <li>
                        <span className="ability-title">Bootstrap / Materialize</span>
                        <span className="ability-score">
                            <i className="fa fa-star filled" aria-hidden="true"></i>
                            <i className="fa fa-star filled" aria-hidden="true"></i>
                            <i className="fa fa-star filled" aria-hidden="true"></i>
                            <i className="fa fa-star filled" aria-hidden="true"></i>
                            <i className="fa fa-star filled" aria-hidden="true"></i>
                        </span>
                    </li>
                    <li>
                        <span className="ability-title">React Bootstrap</span>
                        <span className="ability-score">
                            <i className="fa fa-star filled" aria-hidden="true"></i>
                            <i className="fa fa-star filled" aria-hidden="true"></i>
                            <i className="fa fa-star filled" aria-hidden="true"></i>
                            <i className="fa fa-star filled" aria-hidden="true"></i>
                            <i className="fa fa-star filled" aria-hidden="true"></i>
                        </span>
                    </li>
                </ul>        
            </Col>
        </Row> 
    );
}
import React, {Component} from 'react';
import {Col, Grid, Row, Image} from 'react-bootstrap';
import '../css/main.css';

export const Skills = ({title}) => {

    return (
        <Grid fluid>
            <Row className="skills">
                <h1 className="titleSkills text-center text-capitalize">{title}</h1>
                <Col md={6} sm={6} xs={12} lg={6}>
                    <Row className="skill">
                        <Col mdOffset={2} md={4} smOffset={1} sm={5} xs={6} lgOffset={2} lg={4}>
                            <span className="ability-title">React</span>
                        </Col>
                        <Col
                            mdOffset={2}
                            md={4}
                            smOffset={2}
                            sm={4}
                            xsOffset={2}
                            xs={4}
                            lgOffset={2}
                            lg={4}>
                            <span className="ability-score pull-left">
                                <i className="fa fa-star filled" aria-hidden="true"></i>
                                <i className="fa fa-star filled" aria-hidden="true"></i>
                                <i className="fa fa-star filled" aria-hidden="true"></i>
                                <i className="fa fa-star filled" aria-hidden="true"></i>
                                <i className="fa fa-star-o" aria-hidden="true"></i>
                            </span>
                        </Col>
                    </Row>
                    <Row className="skill">
                        <Col mdOffset={2} md={4} smOffset={1} sm={5} xs={6} lgOffset={2} lg={4}>
                            <span className="ability-title">Redux</span>
                        </Col>
                        <Col
                            mdOffset={2}
                            md={4}
                            smOffset={2}
                            sm={4}
                            xsOffset={2}
                            xs={4}
                            lgOffset={2}
                            lg={4}>
                            <span className="ability-score pull-left">
                                <i className="fa fa-star filled" aria-hidden="true"></i>
                                <i className="fa fa-star filled" aria-hidden="true"></i>
                                <i className="fa fa-star filled" aria-hidden="true"></i>
                                <i className="fa fa-star-half-o" aria-hidden="true"></i>
                                <i className="fa fa-star-o" aria-hidden="true"></i>
                            </span>
                        </Col>
                    </Row>
                    <Row className="skill">
                        <Col mdOffset={2} md={4} smOffset={1} sm={5} xs={6} lgOffset={2} lg={4}>
                            <span className="ability-title">Javascript/ES6</span>
                        </Col>
                        <Col
                            mdOffset={2}
                            md={4}
                            smOffset={2}
                            sm={4}
                            xsOffset={2}
                            xs={4}
                            lgOffset={2}
                            lg={4}>
                            <span className="ability-score pull-left">
                                <i className="fa fa-star filled" aria-hidden="true"></i>
                                <i className="fa fa-star filled" aria-hidden="true"></i>
                                <i className="fa fa-star filled" aria-hidden="true"></i>
                                <i className="fa fa-star filled" aria-hidden="true"></i>
                                <i className="fa fa-star-half-o" aria-hidden="true"></i>
                            </span>
                        </Col>
                    </Row>
                    <Row className="skill">
                        <Col mdOffset={2} md={4} smOffset={1} sm={5} xs={6} lgOffset={2} lg={4}>
                            <span className="ability-title">jQuery</span>
                        </Col>
                        <Col
                            mdOffset={2}
                            md={4}
                            smOffset={2}
                            sm={4}
                            xsOffset={2}
                            xs={4}
                            lgOffset={2}
                            lg={4}>
                            <span className="ability-score pull-left">
                                <i className="fa fa-star filled" aria-hidden="true"></i>
                                <i className="fa fa-star filled" aria-hidden="true"></i>
                                <i className="fa fa-star filled" aria-hidden="true"></i>
                                <i className="fa fa-star filled" aria-hidden="true"></i>
                                <i className="fa fa-star-half-o" aria-hidden="true"></i>
                            </span>
                        </Col>
                    </Row>
                    <Row className="skill">
                        <Col mdOffset={2} md={4} smOffset={1} sm={5} xs={6} lgOffset={2} lg={4}>
                            <span className="ability-title">GitHub / Git</span>
                        </Col>
                        <Col
                            mdOffset={2}
                            md={4}
                            smOffset={2}
                            sm={4}
                            xsOffset={2}
                            xs={4}
                            lgOffset={2}
                            lg={4}>
                            <span className="ability-score pull-left">
                                <i className="fa fa-star filled" aria-hidden="true"></i>
                                <i className="fa fa-star filled" aria-hidden="true"></i>
                                <i className="fa fa-star filled" aria-hidden="true"></i>
                                <i className="fa fa-star filled" aria-hidden="true"></i>
                                <i className="fa fa-star filled" aria-hidden="true"></i>
                            </span>
                        </Col>
                    </Row>
                </Col>
                <Col md={6} sm={6} xs={12} lg={6}>
                    <Row className="skill">
                        <Col mdOffset={2} md={4} smOffset={1} sm={5} xs={6} lgOffset={2} lg={4}>
                            <span className="ability-title">HTML5</span>
                        </Col>
                        <Col
                            mdOffset={2}
                            md={4}
                            smOffset={2}
                            sm={4}
                            xsOffset={2}
                            xs={4}
                            lgOffset={2}
                            lg={4}>
                            <span className="ability-score pull-left">
                                <i className="fa fa-star filled" aria-hidden="true"></i>
                                <i className="fa fa-star filled" aria-hidden="true"></i>
                                <i className="fa fa-star filled" aria-hidden="true"></i>
                                <i className="fa fa-star filled" aria-hidden="true"></i>
                                <i className="fa fa-star filled" aria-hidden="true"></i>
                            </span>
                        </Col>
                    </Row>
                    <Row className="skill">
                        <Col mdOffset={2} md={4} smOffset={1} sm={5} xs={6} lgOffset={2} lg={4}>
                            <span className="ability-title">CSS3/SASS/SCSS</span>
                        </Col>
                        <Col
                            mdOffset={2}
                            md={4}
                            smOffset={2}
                            sm={4}
                            xsOffset={2}
                            xs={4}
                            lgOffset={2}
                            lg={4}>
                            <span className="ability-score pull-left">
                                <i className="fa fa-star filled" aria-hidden="true"></i>
                                <i className="fa fa-star filled" aria-hidden="true"></i>
                                <i className="fa fa-star filled" aria-hidden="true"></i>
                                <i className="fa fa-star filled" aria-hidden="true"></i>
                                <i className="fa fa-star-o" aria-hidden="true"></i>
                            </span>
                        </Col>
                    </Row>
                    <Row className="skill">
                        <Col mdOffset={2} md={4} smOffset={1} sm={5} xs={6} lgOffset={2} lg={4}>
                            <span className="ability-title">Metodología Agile</span>
                        </Col>
                        <Col
                            mdOffset={2}
                            md={4}
                            smOffset={2}
                            sm={4}
                            xsOffset={2}
                            xs={4}
                            lgOffset={2}
                            lg={4}>
                            <span className="ability-score pull-left">
                                <i className="fa fa-star filled" aria-hidden="true"></i>
                                <i className="fa fa-star filled" aria-hidden="true"></i>
                                <i className="fa fa-star filled" aria-hidden="true"></i>
                                <i className="fa fa-star filled" aria-hidden="true"></i>
                                <i className="fa fa-star filled" aria-hidden="true"></i>
                            </span>
                        </Col>
                    </Row>
                    <Row className="skill">
                        <Col mdOffset={2} md={4} smOffset={1} sm={5} xs={6} lgOffset={2} lg={4}>
                            <span className="ability-title">Bootstrap / React</span>
                        </Col>
                        <Col
                            mdOffset={2}
                            md={4}
                            smOffset={2}
                            sm={4}
                            xsOffset={2}
                            xs={4}
                            lgOffset={2}
                            lg={4}>
                            <span className="ability-score pull-left">
                                <i className="fa fa-star filled" aria-hidden="true"></i>
                                <i className="fa fa-star filled" aria-hidden="true"></i>
                                <i className="fa fa-star filled" aria-hidden="true"></i>
                                <i className="fa fa-star filled" aria-hidden="true"></i>
                                <i className="fa fa-star-half-o" aria-hidden="true"></i>
                            </span>
                        </Col>
                    </Row>
                    <Row className="skill">
                        <Col mdOffset={2} md={4} smOffset={1} sm={5} xs={6} lgOffset={2} lg={4}>
                            <span className="ability-title">Materialize</span>
                        </Col>
                        <Col
                            mdOffset={2}
                            md={4}
                            smOffset={2}
                            sm={4}
                            xsOffset={2}
                            xs={4}
                            lgOffset={2}
                            lg={4}>
                            <span className="ability-score pull-left">
                                <i className="fa fa-star filled" aria-hidden="true"></i>
                                <i className="fa fa-star filled" aria-hidden="true"></i>
                                <i className="fa fa-star filled" aria-hidden="true"></i>
                                <i className="fa fa-star filled" aria-hidden="true"></i>
                                <i className="fa fa-star filled" aria-hidden="true"></i>
                            </span>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Grid>

    );
}
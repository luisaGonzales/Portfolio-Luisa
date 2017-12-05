import React, {Component} from 'react';
import {Col, Grid, Row, Image, Tooltip, OverlayTrigger, } from 'react-bootstrap';
import '../css/main.css';

export const Lang = ({title}) => {
    const avanzado = (
        <Tooltip id="tooltip"><strong>Nivel:</strong> Avanzado</Tooltip>
    );
    const intermedio = (
        <Tooltip id="tooltip"><strong>Nivel:</strong> Intermedio</Tooltip>
    );
    const basico= (
        <Tooltip id="tooltip"><strong>Nivel:</strong> Básico</Tooltip>
    );
    return (
        <Row id="lang" className="lang">
            <Col md={12} sm={12} lg={12} xs={12}>
                <h1 className="titleLang text-center text-capitalize">{title}</h1>
            </Col>
            <Col md={6} sm={12} xs={12} lg={6}>
                <ul className="no-bullets">
                    <li>
                        <span className="ability-title">
                            <OverlayTrigger placement="top" overlay={avanzado}>
                                <span bsStyle="default">Español / Lengua Materna</span>
                            </OverlayTrigger>
                        </span>
                        <span className="ability-score">
                            <i className="fa fa-star filled" aria-hidden="true"></i>
                            <i className="fa fa-star filled" aria-hidden="true"></i>
                            <i className="fa fa-star filled" aria-hidden="true"></i>
                            <i className="fa fa-star filled" aria-hidden="true"></i>
                            <i className="fa fa-star filled" aria-hidden="true"></i>
                        </span>
                    </li>
                    <li>
                        <span className="ability-title">
                            <OverlayTrigger placement="bottom" overlay={intermedio}>
                                <span bsStyle="default">English</span>
                            </OverlayTrigger>
                        </span>
                        <span className="ability-score">
                            <i className="fa fa-star filled" aria-hidden="true"></i>
                            <i className="fa fa-star filled" aria-hidden="true"></i>
                            <i class="fa fa-star-half-o" aria-hidden="true"></i>
                            <i className="fa fa-star-o" aria-hidden="true"></i>
                            <i className="fa fa-star-o" aria-hidden="true"></i>
                        </span>
                    </li>
                </ul>
            </Col>
            <Col md={6} sm={12} xs={12} lg={6}>
                <ul className="no-bullets">
                    <li>
                        <span className="ability-title">
                            <OverlayTrigger placement="top" overlay={basico}>
                                <span bsStyle="default">Português</span>
                            </OverlayTrigger>
                        </span>
                        <span className="ability-score">
                            <i className="fa fa-star filled" aria-hidden="true"></i>
                            <i class="fa fa-star-half-o" aria-hidden="true"></i>
                            <i className="fa fa-star-o" aria-hidden="true"></i>
                            <i className="fa fa-star-o" aria-hidden="true"></i>
                            <i className="fa fa-star-o" aria-hidden="true"></i>
                        </span>
                    </li>
                </ul>
            </Col>
        </Row>
    );

}
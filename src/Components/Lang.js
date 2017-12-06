import React, {Component} from 'react';
import {
    Col,
    Grid,
    Row,
    Image,
    Tooltip,
    OverlayTrigger, 
    bsStyle
} from 'react-bootstrap';
import '../css/main.css';

export const Lang = ({title}) => {
    const avanzado = (
        <Tooltip id="tooltip">
            <strong>Nivel:</strong>
            Avanzado</Tooltip>
    );
    const intermedio = (
        <Tooltip id="tooltip">
            <strong>Nivel:</strong>
            Intermedio</Tooltip>
    );
    const basico = (
        <Tooltip id="tooltip">
            <strong>Nivel:</strong>
            Básico</Tooltip>
    );
    return (
        <Grid fluid>
            <Row id="lang" className="lang">
                <h1 className="titleLang text-center text-capitalize">{title}</h1>
                <Col md={6} sm={12} xs={12} lg={6}>
                    <Row className="skill">
                        <Col mdOffset={2} md={4} smOffset={1} sm={5} xs={6} lgOffset={2} lg={4}>
                            <span className="ability-title">
                                <OverlayTrigger placement="top" overlay={avanzado}>
                                    <span bsStyle="default">Español/Materna</span>
                                </OverlayTrigger>
                            </span>
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
                            <span className="ability-title">
                                <OverlayTrigger placement="bottom" overlay={intermedio}>
                                    <span bsStyle="default">English</span>
                                </OverlayTrigger>
                            </span>
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
                                <i className="fa fa-star-half-o" aria-hidden="true"></i>
                                <i className="fa fa-star-o" aria-hidden="true"></i>
                                <i className="fa fa-star-o" aria-hidden="true"></i>
                            </span>
                        </Col>
                    </Row>
                </Col>
                <Col md={6} sm={12} xs={12} lg={6}>
                    <Row className="skill">
                        <Col mdOffset={2} md={4} smOffset={1} sm={5} xs={6} lgOffset={2} lg={4}>
                            <span className="ability-title">
                                <OverlayTrigger placement="top" overlay={basico}>
                                    <span bsStyle="default">Português</span>
                                </OverlayTrigger>
                            </span>
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
                                <i className="fa fa-star-half-o" aria-hidden="true"></i>
                                <i className="fa fa-star-o" aria-hidden="true"></i>
                                <i className="fa fa-star-o" aria-hidden="true"></i>
                                <i className="fa fa-star-o" aria-hidden="true"></i>
                            </span>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Grid>
    );

}
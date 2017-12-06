import React, {Component} from 'react';
import {
    Col,
    Grid,
    Row,
    Image,
    Tooltip,
    OverlayTrigger
} from 'react-bootstrap';
import '../css/main.css';

const Icon = ({url, font}) => {
    return (
        <Col md={2}>
            <span className="fa-stack fa-lg">
                <a target="_blank" href={url}>
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i className={font} aria-hidden="true"></i>
                </a>
            </span>
        </Col>
    );
}

export const Contact = ({title}) => {
    const phone = (
        <Tooltip id="tooltip">
            <strong>+51
            </strong>
            943572159</Tooltip>
    );
    return (
        <Grid fluid>
            <Row className="contact">
                <div className="photoSmile"></div>
                <Col md={12} sm={12} lg={12} xs={12}>
                    <h1 className="titleContact text-center text-capitalize">{title}</h1>
                </Col>
                <Col mdHidden={6} smHidden={12} xsHidden={12} lgHidden={6}>
                    <form className="formContact">
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                id="exampleInputName"
                                placeholder="Nombre"/>
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                placeholder="Correo"/>
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder="Asunto"/>
                        </div>
                        <textarea className="form-control" rows="3" placeholder="Mensaje"></textarea>
                        <button type="submit" className="btnSend">Enviar</button>
                    </form>
                </Col>
                <Col md={12} sm={12} xs={12} lg={12}>
                    <Row className="icons text-center">
                        <Col mdOffset={3}>
                            <Icon
                                url={"https://www.facebook.com/luisa.gonzales.58"}
                                font={"fa fa-facebook fa-stack-1x fa-inverse"}/>
                            <Icon
                                url={"https://www.linkedin.com/in/luisagonzalescaceres/"}
                                font={"fa fa-linkedin fa-stack-1x fa-inverse"}/>
                            <Icon
                                url={"https://github.com/luisaGonzales"}
                                font={"fa fa-github fa-stack-1x fa-inverse"}/>
                            <Col md={2}>
                                <OverlayTrigger placement="top" overlay={phone}>
                                    <span className="fa-stack fa-lg">
                                        <i class="fa fa-circle fa-stack-2x"></i>
                                        <i className="fa fa-mobile fa-stack-1x fa-inverse " aria-hidden="true"></i>
                                    </span>
                                </OverlayTrigger>
                            </Col>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Grid>
    );
}

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
import resume from '../Archives/LuisaGonzalesCV.pdf';

export const Contact = ({title}) => {
    const phone = (
        <Tooltip id="tooltip">
            <strong>+51 </strong> 943572159</Tooltip>
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
                    <section id="contact">
                        <div className="contact-wrapper">
                            <ul className="contact-icons-list">
                                <li>
                                    <OverlayTrigger placement="top" overlay={phone}>
                                        <span
                                            className="contact-icon">
                                            <span className="icon-span">
                                                <i className="fa fa-mobile icon-font"></i>
                                            </span>
                                        </span>
                                    </OverlayTrigger>
                                </li>
                                <li>
                                    <a
                                        href="https://www.linkedin.com/in/luisagonzalescaceres/"
                                        target="_blank"
                                        className="contact-icon">
                                        <span className="icon-span">
                                            <i className="fa fa-linkedin icon-font"></i>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://github.com/luisaGonzales"
                                        target="_blank"
                                        className="contact-icon">
                                        <span className="icon-span">
                                            <i className="fa fa-github icon-font"></i>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href={resume}
                                        download
                                        target="_blank"
                                        className="contact-icon">
                                        <span className="icon-span">
                                            <i className="fa fa-download icon-font"></i>
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </section>
                </Col>
            </Row>
        </Grid>
    );
}

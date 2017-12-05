import React, {Component} from 'react';
import {Col, Grid, Row, Image} from 'react-bootstrap';
import '../css/main.css';

export const Contact = ({title}) => {
    return (
        <Row className="contact">
            <div className="photoSmile"></div>
            <Col md={12} sm={12} lg={12} xs={12}>
                <h1 className="titleContact text-center text-capitalize">{title}</h1>
            </Col>
            <Col md={6} sm={12} xs={12} lg={6}>
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
            <Col md={6} sm={12} xs={12} lg={6}>
            <div className="icons text-center">
                        <span className="fa-stack fa-lg">
                            <a target="_blank" href="https://www.facebook.com/luisa.gonzales.58">
                                <i class="fa fa-circle fa-stack-2x"></i>
                                <i className="fa fa-facebook fa-stack-1x fa-inverse" aria-hidden="true"></i>
                            </a>
                        </span>
                        
                        <span className="fa-stack fa-lg">
                        <a target="_blank" href="https://www.linkedin.com/in/luisagonzalescaceres/">
                            <i class="fa fa-circle fa-stack-2x"></i>
                            <i className="fa fa-linkedin fa-stack-1x fa-inverse" aria-hidden="true"></i>
                        </a> 
                        </span>
                        <span className="fa-stack fa-lg">
                        <a target="_blank" href="https://www.instagram.com/luu_ink/">
                            <i class="fa fa-circle fa-stack-2x"></i>
                            <i className="fa fa-instagram fa-stack-1x fa-inverse" aria-hidden="true"></i>
                        </a>
                        </span>
                        <span className="fa-stack fa-lg">
                        <a target="_blank" href="https://github.com/luisaGonzales">
                            <i class="fa fa-circle fa-stack-2x"></i>
                            <i className="fa fa-github fa-stack-1x fa-inverse" aria-hidden="true"></i>
                        </a> 
                        </span>
                    </div>
            </Col>
        </Row>
    );
}


import React, {Component} from 'react';
import {Col, Grid, Row, Image, Thumbnail} from 'react-bootstrap';
import '../css/main.css';

export const Footer = () => {
    return(
        <Row className="footer">
            <Col xs={12} lg={12} sm={12} md={12}>
                <div className="pull-right"> MADE WITH HOPE.</div>
            </Col>
            <Col xs={12} lg={12} sm={12} md={12}>
                <div className="pull-right"> 2017</div>
            </Col>
        </Row>
    );
}

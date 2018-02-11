import React, {Component} from 'react';
import {Col, Grid, Row, Image} from 'react-bootstrap';
import '../css/main.css';
import photo from '../img/Foto.jpg';
import resume from '../Archives/LuisaGonzalesCV.pdf';
import {connect} from 'redux-zero/react';

export const About = ({title, info, titleResume}) => {
    return (
        <Grid container-fluid>
            <Row id="about" className="show-grid">
                <Col md={6} smHidden xsHidden lg={6}>
                    <Image src={photo} alt="me" className="photo" responsive/>
                </Col>
                <Col md={6} sm={12} xs={12} lg={6}>
                    <div className="description">
                        <h1 className="titleAbout text-center">{title}</h1>
                        <p className="textAbout">{info}</p>
                        <div className="resume text-center">
                            <a target="_blank" href={resume} download className="linkCV">{titleResume}
                                <i className="fa fa-download" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                </Col>
            </Row>
        </Grid>
    );
}

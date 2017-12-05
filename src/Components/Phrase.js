import React, {Component} from 'react';
import {Col, Grid, Row} from 'react-bootstrap';
import '../css/main.css';
import {connect} from 'redux-zero/react';

export const Phrase = ({phrase, author}) => {
    return(
        <section className="phrase">
            <Col md={12} sm={12} xs={12}>
                <p className="text"><em>{phrase}</em></p>
                <p className="author pull-right" >{author}</p>
            </Col>
            {/* <div > 
                <a href="#header">
                    <i class="fa fa-angle-double-up"></i>
                </a>
            </div> */}
        </section>
    )
}

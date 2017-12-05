import React, {Component} from 'react';
import {Col, Grid, Row} from 'react-bootstrap';
import '../css/main.css';
import {connect} from 'redux-zero/react';

export const Phrase = ({phrase, author}) => {
    return(
        <Grid fluid className="phrase">
            <p className="text"><em>{phrase}</em></p>
            <p className="author pull-right" >{author}</p>
        </Grid>
        
    )
}

import React, {Component} from 'react';
import {Col, Grid, Row} from 'react-bootstrap';
import '../css/main.css';

export const Header = ({name, who}) => {
    return (
        <Grid fluid className="header text-center">
            <Grid>
                <h1 className="name">{name}</h1>
                <h2 className="title">{who}</h2>
                <div className='scroll'>
                        <span className='pulse-button'><i className="fa fa-angle-double-down fa-2x" aria-hidden="true"></i></span>
                    </div>
            </Grid>
            

        </Grid>
    );
}
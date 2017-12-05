import React, {Component} from 'react';
import {Col, Grid, Row, Image, Thumbnail} from 'react-bootstrap';
import '../css/main.css';

const Project = ({image, titleProject, descriptionProject, demo, index, github}) => {
    return (
        <figure className="snip1208">
            <img src={image} width="310px" height="221px"/>
            {/*<div className="date">
                <span className="day">{index}</span>
            </div>*/}
                <i class="fa fa-desktop" aria-hidden="true"></i>
            <figcaption>
                <h3 className="text-center">{titleProject}</h3>
                <p>
                    {descriptionProject}
                </p>
                <div>
                    <span><a target="_blank" className="btnsPortfolio" href={demo}>demo</a></span>
                    <span><a target="_blank" className="btnsPortfolio" href={github}>code</a></span>
                </div>
            </figcaption>
        </figure>
    );
}

export const Portfolio = ({title, info}) => {
    console.log(info);
    const list = info.projects.imgs.map((img, index)=> {
        return (
            <Col sm={4}>
                <Project github={info.projects.github[index]} index={index + 1} image={img} titleProject={info.projects.titles[index]} demo={info.projects.demo[index]}/>
            </Col>  
        );
    } )
    return (
        <Row className="portfolio text-center">
            <Col md={12} className="titlePortfolio">
                    <h1>{title}</h1>
            </Col>
            <Col smOffset={1}>
                {list}
            </Col>
        </Row>
    );
}
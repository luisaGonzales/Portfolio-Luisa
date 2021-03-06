import React, {Component} from 'react';
import {Col, Grid, Row, Image, Thumbnail} from 'react-bootstrap';
import '../css/main.css';

const Project = ({image, titleProject, descriptionProject, demo, index, github}) => {
    return (
        <div className="projectsList">
        <Image src={image} alt="project" className="portfolioImg" width="310px" height="200px" />
        <figcaption>
          <h3>{titleProject}</h3>
          <span><a target="_blank" className="seeGithub" href={github}><i className="fa fa-github" aria-hidden="true"></i></a></span>
        </figcaption>
        <span><a target="_blank" href={demo}><i className="fa fa-eye" aria-hidden="true"></i></a></span>      
      </div>
    );
}

export const Portfolio = ({title, info}) => {
    console.log(info);
    const list = info.projects.imgs.map((img, index)=> {
        return (
            <Col lg={4} md={4} sm={6} xs={12} className="allProjects" >
                <Project key={index} github={info.projects.github[index]} index={index + 1} image={img} titleProject={info.projects.titles[index]} demo={info.projects.demo[index]}/>
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
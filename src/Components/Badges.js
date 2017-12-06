import React, {Component} from 'react';
import {
    Col,
    Grid,
    Row,
    Image,
    OverlayTrigger,
    Button,
    Popover
} from 'react-bootstrap';
import '../css/main.css';
import unicornio from '../img/Badge/unicornio.png';
import agile from '../img/Badge/mas_agile.png';
import squad from '../img/Badge/mejor_squad.png';
import rocking from '../img/Badge/ROCKING.png';
import mejores from '../img/Badge/5_mejores.png'

export const Badges = ({title, insignia}) => {
    return (
        <Grid fluid>
            <Row className="badgets">
                <Col lg={5} md={12} sm={12} xs={12} className="content">
                    <h1 className="badgetTitle text-right">{title}</h1>
                </Col>
                <Col lg={7} md={12} sm={12} xs={12} className="imageBox">
                    <div className="alls">
                        <OverlayTrigger
                            trigger={['hover', 'focus']}
                            placement="top"
                            overlay={< Popover id = "popover-trigger-hover-focus" title = {
                            insignia.best
                        } > {
                            insignia.bestTxt
                        } </Popover>}>
                            <div className="badge">
                                <Image className="insignia" src={mejores}/>
                                <div className="times">
                                    <p>x6</p>
                                </div>
                            </div>
                        </OverlayTrigger>
                        <OverlayTrigger
                            trigger={['hover', 'focus']}
                            placement="top"
                            overlay={< Popover id = "popover-trigger-hover-focus" title = {
                            insignia.agile
                        } > {
                            insignia.agileTxt
                        } </Popover>}>
                            <div className="badge">
                                <Image className="insignia" src={agile}/>
                                <div className="times">
                                    <p>x1</p>
                                </div>
                            </div>
                        </OverlayTrigger>
                        <OverlayTrigger
                            trigger={['hover', 'focus']}
                            placement="top"
                            overlay={< Popover id = "popover-trigger-hover-focus" title = {
                            insignia.squad
                        } > {
                            insignia.squadTxt
                        } </Popover>}>
                            <div className="badge">
                                <Image className="insignia" src={squad}/>
                                <div className="times">
                                    <p>x2</p>
                                </div>
                            </div>
                        </OverlayTrigger>
                        <OverlayTrigger
                            trigger={['hover', 'focus']}
                            placement="top"
                            overlay={< Popover id = "popover-trigger-hover-focus" title = {
                            insignia.rocking
                        } > {
                            insignia.rockingTxt
                        } </Popover>}>
                            <div className="badge">
                                <Image className="insignia" src={rocking}/>
                                <div className="times">
                                    <p>x1</p>
                                </div>
                            </div>
                        </OverlayTrigger>
                        <OverlayTrigger
                            trigger={['hover', 'focus']}
                            placement="top"
                            overlay={< Popover id = "popover-trigger-hover-focus" title = {
                            insignia.unicornio
                        } > {
                            insignia.unicornioTxt
                        } </Popover>}>
                            <div className="badge">
                                <Image className="insignia" src={unicornio}/>
                                <div className="times">
                                    <p>x1</p>
                                </div>
                            </div>
                        </OverlayTrigger>
                    </div>
                </Col>
            </Row>
        </Grid>
    );
}
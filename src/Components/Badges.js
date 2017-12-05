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
        <Row className="badgets">
            <Col md={5} sm={12} lg={5} xs={12} className=" text-right content">
                <h1 className="badgetTitle">{title}</h1>
            </Col>
            <Col md={7} sm={12} xs={12} lg={7} className=" imageBox">
                <div className="alls">
                    <OverlayTrigger
                        trigger={['hover', 'focus']}
                        placement="top"
                        overlay={<Popover id = "popover-trigger-hover-focus" title = {insignia.best}> {insignia.bestTxt} </Popover>}>
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
    );
}
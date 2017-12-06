import React, { Component } from 'react';
import { connect } from 'redux-zero/react';
import {Grid, Row, Col} from 'react-bootstrap';
import './App.css'
import {Header} from './Components/Header';
import {Navigator} from './Components/Nav';
import {About} from './Components/About';
import {states} from './Actions/Actions';
import {Phrase} from './Components/Phrase';
import {Skills} from './Components/Skills';
import {Lang} from './Components/Lang';
import {Badges} from './Components/Badges';
import {Portfolio} from './Components/Portfolio';
import {Contact} from './Components/Contact';
import {Footer} from './Components/Footer';

const App = ({personal, socials, info, repos, language}) => {
  states()
  return (
    <div>
      <Header name={personal.name} who={personal.who} />
      <About title={info[language].titles.sectionAbout} info={info[language].about} titleResume={info[language].titles.resume} />
      <Phrase phrase={info[language].phrase.text} author={info[language].phrase.author} />
      <Skills title={info[language].titles.sectionSkills} />
      <hr/>   
      <Lang title={info[language].titles.sectionLang}/>
      <Badges title={info[language].titles.sectionBadgets} insignia={info[language].insignia}/>
      <Portfolio title={info[language].titles.sectionPortfolio} info={info[language]} />
      <Contact title={info[language].titles.sectionContact}/>
      <Footer />
    </div>
  );
}

const mapToProps = ({personal, socials, info, repos, language}) => ({personal, socials, info, repos, language});
export default connect (mapToProps)(App);


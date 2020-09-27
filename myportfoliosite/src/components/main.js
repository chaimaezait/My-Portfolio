import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Resume from './resume';
import ProjectPage from './project';
import Contact from './contact';

const Main = () => (
    <Switch>
        <Route exact path="/" component = {LandingPage} />   
        <Route exact path="/aboutMe" component = {AboutMe} />   
        <Route exact path="/resume" component = {Resume} />   
        <Route exact path="/project" component = {ProjectPage} />   
        <Route exact path="/contact" component = {Contact} />   
    </Switch>
)

export default Main;
import React from 'react';
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl';
import './App.css';
import Main from './components/main'
import {Link} from 'react-router-dom';

function App() {
  return (
    <div style={{height: '300px', position: 'relative'}}>
    <Layout>
    <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">MyPortfolio</Link>} scroll>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About me</Link>
                <Link to="/project">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
            <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About me</Link>
                <Link to="/project">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
          <div className="page-content"/>
          <Main/>
        </Content>
        
    </Layout>
</div>
  );
}

export default App;

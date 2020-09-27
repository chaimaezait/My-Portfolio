import React , {Component} from 'react';
import {Grid,Cell} from 'react-mdl';
//import pic from './';

class LandingPage extends Component{
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src= {require('./pic.jpg')}
                            
                            alt= "chaz"
                            className ="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Fullstack Engineer</h1>
                            <hr/>
                        <p>HTML/CSS | Javascript | Nodejs | Express | React | MongoDB | Angular | Java | Python | Spring</p>

                        <div className ="social-links">

                            {/**LinkedIn */}
                            <a href="https://www.linkedin.com/in/zait-chaimae-27b640158/" rel ="noopener noreferrer" target="_blank" >
                                <i className="fa fa-linkedin-square" aria-hidden="true"/>
                            </a>

                            {/**Github */}
                            <a href="https://github.com/chaimaezait" rel ="noopener noreferrer" target="_blank" >
                                <i className="fa fa-github-square" aria-hidden="true"/>
                            </a>

                            {/**freecodecam */}
                            <a href="https://forum.freecodecamp.org/u/zaitchaimae/preferences/account" rel ="noopener noreferrer" target="_blank" >
                                <i className="fa fa-free-code-camp" aria-hidden="true"/>
                            </a>
                            {/**LinkedIn */}
                            <a href="https://www.google.com/" rel ="noopener noreferrer" target="_blank" >
                                <i className="fa fa-code" aria-hidden="true"/>
                            </a>
                        </div>

                        </div>
                    </Cell>
                </Grid>

            </div>
        )
    }
}

export default LandingPage;
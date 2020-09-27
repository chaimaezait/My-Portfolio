import React , {Component} from 'react';
import {Tabs,Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';
//import logo from './certificat.png';

class ProjectPage extends Component{
    constructor(props){
        super(props);
        this.state = {activeTab: 0};
    }
    toggleCategories(){
        if(this.state.activeTab===0){
            return(
                <div className="projects-grid">
                     {/* Project 1*/}
            <Card shadow={5} style={{minwidth: '450', margin: 'auto'}}>
                <CardTitle expand style={{color: '#fff',height:'176px', background: 'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center/cover'}}>E-Pharmacie Project</CardTitle>
                <CardText>
                This is a fully-functional e-pharmacie website.
                This work is based on :
                HTML5 and CSS3: Semantic Elements, CSS Grid, Flexbox
                React: Components, Props, Events, Hooks, Router, Axios
                Redux: Store, Reducers, Actions
                Node & Express: Web API, Body Parser, File Upload, JWT
                </CardText>
                <CardActions border>
                <Button colored><a href="https://github.com/chaimaezait/E-Pharmacie" rel ="noopener noreferrer" target="_blank" >Github</a></Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>
            </Card>
                {/* Project 2*/}
            <Card shadow={5} style={{minwidth: '450', margin: 'auto'}}>
                <CardTitle  expand style={{color: '#fff',height:'200px', background: 'url(https://pbs.twimg.com/profile_images/1074670433260187648/de6FXq-d_400x400.jpg) center/cover'}}> <p className='text-aria'>Fetching API</p></CardTitle>
                <CardText>
                This is a REST Microservice that handles web fetching using[node-fetch]
                </CardText>
                <CardActions border>
                <Button colored><a href="https://github.com/chaimaezait/backendCoding" rel ="noopener noreferrer" target="_blank" >Github</a></Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>
            </Card>
                {/* Project 3*/}
            <Card shadow={5} style={{minwidth: '450', margin: 'auto'}}>
                <CardTitle expand style={{color: '#fff',height:'176px', background: 'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center/cover'}}>Portfolio</CardTitle>
                <CardText>
                This is the github repository of my react-portfolio.
                A React based personal portfolio app using create-react-app and React Router v4.
                </CardText>
                <CardActions border>
                   <Button colored><a href="https://github.com/chaimaezait/My-Portfolio" rel ="noopener noreferrer" target="_blank" >Github</a></Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>
            </Card>
                </div>
            )
        }
        else{
            return(
                <div className="projects-grid">
                    <Card shadow={0} style={{width: '600px', height: '400px', background: 'url(https://media-exp1.licdn.com/dms/image/C4E2DAQEPVi8JD6cCoA/profile-treasury-image-shrink_1280_1280/0?e=1601305200&v=beta&t=M3ngdxsfHysuouD75Bd7v0Zh2jEpH-ng7CVC-0TzFHw) center / cover', margin: 'auto'}}>
                    <CardTitle expand />
                    <CardActions style={{height: '52px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
                    <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}>
                        JavaScript Algorithms and Data Structures.
                    </span>
                    </CardActions>
                    </Card>

                    <Card shadow={0} style={{width: '600px', height: '400px', background: 'url(https://media-exp1.licdn.com/dms/image/C4D2DAQF6EBjWespi_Q/profile-treasury-image-shrink_1280_1280/0?e=1600984800&v=beta&t=6qP1XRfN_6oCqCgZnSFSo6YIFkeHTy5aClEfTIlPmeQ) center / cover', margin: 'auto'}}>
                    <CardTitle expand />
                    <CardActions style={{height: '52px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
                    <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}>
                        Responsive Web Design.
                    </span>
                    </CardActions>
                    </Card>

                    <Card shadow={0} style={{width: '600px', height: '400px', background : 'url(https://media-exp1.licdn.com/dms/image/C4D2DAQEfyuE5IrjwEA/profile-treasury-image-shrink_1920_1920/0?e=1600992000&v=beta&t=WcX9PxeJC9J7prozpKRBBT64BS4CyVHHRSTXUsfs5QI) center / cover', margin: 'auto'}}>
                    <CardTitle expand />
                    <CardActions style={{height: '52px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
                    <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}>
                       Trading Algorithm Certificat.
                    </span>
                    </CardActions>
                    </Card>

                </div>
            )

        }
    }

    render(){
        return(
            <div className="demo-tabs">
            <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                <Tab>Projects</Tab>
                <Tab>Certificats</Tab>
                
            </Tabs>
            <section >
                <Grid >
                    <Cell col={12}> 
                      <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
                
            </section>
            </div>
        )
    }
}

export default ProjectPage ;
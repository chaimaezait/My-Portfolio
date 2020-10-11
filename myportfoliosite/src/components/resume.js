import React , {Component} from 'react';
//import {Grid,Cell} from 'react-mdl';
import PDF from './curriculum_vitae_Nrchaz.pdf'
import { Card, CardTitle, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Resume extends Component{
    render(){
        return(
            <div  className="resume-grid">
               <Card  shadow={0} style={{width: '700px',height:'700px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px'}}><img
                            src= {require('./resume.png')}
                            
                            alt= "chaz"
                           
                        /></CardTitle>
      
                    <CardActions border>
                        <Button colored> <a href = {PDF} rel="noopener noreferrer"  target = "_blank">Download Pdf</a></Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                    </CardMenu>
                </Card>
            </div>
        )
    }
}

export default Resume;
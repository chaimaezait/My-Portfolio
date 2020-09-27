import React , {Component} from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component{
    render(){
        return(
        <div className="contact-body">
            <Grid className="contact-grid">
                <Cell col={6}>
                    <h2>ZAIT Chaimae</h2>
                    
                    <div className="circular--portrait">
                    <img
                      src={require('./pic.jpg')}

                      alt="chaz"
                      style={{height: '250px'}}
                    />
                    </div>
                    <p className="contact_paragraph" >Full Stack Engineer(Nodejs|Express|React|Java|Angular)</p>
                    
                </Cell>
                <Cell col={6}>
                    <h2> Contact me</h2>
                    <hr/>

                    <div className="contact-list">
                    <List>
                        <ListItem>
                            <ListItemContent style={{fontSize:'21px',fontFamily: 'Antom'}}>
                                <i className="fa fa-phone-square" aria-hidden="true"/>
                                (+212) 0622 40 05 10
                            </ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent style={{fontSize:'21px',fontFamily: 'Antom'}}>
                                <i className="fa fa-envelope" aria-hidden="true"/>
                                zaitchaimae1997@gmail.com    
                            </ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent style={{fontSize:'21px',fontFamily: 'Antom'}}>
                                <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                linkedin.com/in/zait-chaimae-27b640158
                            </ListItemContent>
                        </ListItem>
                    </List>

                    </div>
                    

                </Cell>
        
            </Grid>
    
        </div>
        )
    }
}

export default Contact;
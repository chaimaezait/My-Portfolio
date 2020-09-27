import React , {Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class AboutMe extends Component{
    render(){
        return(
            <div className="aboutme-body">
            <Grid className="aboutme-grid">
                <Cell col={6}>
                <h2>About me </h2>
                <hr/>

                <p> My name is ZAIT Chaimae ,i'm a fullstack engineer freshly graduated from “Institut National des postes et Télécommunications”(INPT).</p>

                <p> I was able to accumulate experience through the internships, I had during my studies at INPT. I have worked with both small and big teams. Thus, I developed an essential teamwork spirit. While I'm an ambitious full-stack engineer, my expertise is in building scalable backend services(API services, stream processing, and async mechanisms ).</p>
                <p>I am a full-stack web Developer using MongoDB, Express, React, Node.js (MERN). I have worked on building CRUD applications, RESTful APIs using Node.js, and express.</p>
                <p>I keep always a great interest in problem solving and digitalization of processes. I'm looking for a junior individual contributor role, where I can exercise my skills, work with talented people,and gain experience with project architecture. </p>
                </Cell> 
            </Grid>
    
        </div>
        )
    }
}

export default AboutMe;
import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import Button from '@mui/material/Button';
import CV from '../assets/Resume.pdf';
import logo1 from '../assets/react.png';
import logo2 from '../assets/html.png';
import logo3 from '../assets/css.png';
import logo4 from '../assets/nodejs.png';
import logo5 from '../assets/mysql.png';
import logo6 from '../assets/mongodb.png';
import logo8 from '../assets/bootstrap.png';
import logo9 from '../assets/material.png';
import logo10 from '../assets/c.png';
import logo11 from '../assets/python.png';
import logo12 from '../assets/js.png';


function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Prashant</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
         <a href="https://www.linkedin.com/in/codeher0225/" target="_blank" rel="noreferrer"><LinkedInIcon /></a> 
         <a href="mailto:ksrgzp@gmail.com" target="_blank" rel="noreferrer"><EmailIcon /></a>
         <a href="https://github.com/prashant404" target="_blank" rel="noreferrer"> <GithubIcon /></a>
         <div className="container">
         <a href={CV}  target="_blank" rel="noreferrer"><Button variant="contained">Download CV</Button></a>
        
      </div>
        </div>
      </div>
      
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <div className="skills-front">
              <div>
              <img src={logo1} alt="react-logo " caption="react" />
              <p>React.js</p>
              </div>
              <div>
              <img src={logo2} alt="react-logo " caption="react" />
              <p>HTML</p>
              </div>
              <div>
              <img src={logo3} alt="react-logo " caption="react" />
              <p>CSS</p>
              </div>
              <div>
              <img src={logo8} alt="react-logo " caption="react" />
              <p>Bootstrap</p>
              </div>
              <div>
              <img src={logo9} alt="react-logo " caption="react" />
              <p>Material UI</p>
              </div>
              </div>
          </li>
        
          <li className="item">
            <h2>Back-End</h2>
            <div className="skills-front">
              <div>
              <img src={logo4} alt="react-logo " caption="react" />
              <p>Node.js</p>
              </div>
              <div>
              <img src={logo5} alt="react-logo " caption="react" />
              <p>MySql</p>
              </div>
              <div>
              <img src={logo6} alt="react-logo " caption="react" />
              <p>MongoDB</p>
              </div>
              </div>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <div className="skills-front">
              <div>
              <img src={logo10} alt="react-logo " caption="react" />
              <p>C++</p>
              </div>
              <div>
              <img src={logo11} alt="react-logo " caption="react" />
              <p>Python</p>
              </div>
              <div>
              <img src={logo12} alt="react-logo " caption="react" />
              <p>JavaScript</p>
              </div>
              </div>
          </li>
        </ol>
      </div>
    </div>
  );
}
export default Home;

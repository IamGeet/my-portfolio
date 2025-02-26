// import React from "react";
// import '@fortawesome/free-regular-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faReact, faDocker, faPython, faGoogle } from '@fortawesome/free-brands-svg-icons';
// import Chip from '@mui/material/Chip';
// import '../assets/styles/Expertise.scss';

// const labelsFirst = [
//     "React JS",
//     "springboot",
//     "Node.js",
//     "Express.js",
//     "Angular",
//     "JavaScript",
//     "HTML5",
//     "CSS3",
//     "Flask",
//     "Python",
//     "SQL",
//     "PostgreSQL",
//     "mongodb",
//     "Jira",
//     "Postman"
// ];

// const labelsSecond = [
//     "Git",
//     "GitHub Actions",
//     "Docker",
//     "AWS",
//     "Azure",
//     "Linux",
//     "Snowflake",
//     "Pandas",
//     "Selenium",
// ];

// const labelsThird = [
//     "Cloud Run",
//     "BigQuery",
//     "Cloud Storage",
//     "IAM",
//     "Pub/Sub",
//     "Dataflow",
//     "Data Studio",
//     "Cloud SQL",
//     "Python",
// ];

// function Expertise() {
//     return (
//     <div className="container" id="expertise">
//         <div className="skills-container">
//             <h1>Expertise</h1>
//             <div className="skills-grid">
//                 <div className="skill">
//                     <FontAwesomeIcon icon={faReact} size="3x"/>
//                     <h3>Full Stack Web Development</h3>
//                     <p>I have built a diverse array of web applications from scratch using modern technologies such as React and Flask. I have a strong proficiency in the SDLC process and frontend + backend development.</p>
//                     <div className="flex-chips">
//                         <span className="chip-title">Tech stack:</span>
//                         {labelsFirst.map((label, index) => (
//                             <Chip key={index} className='chip' label={label} />
//                         ))}
//                     </div>
//                 </div>

//                 <div className="skill">
//                     <FontAwesomeIcon icon={faDocker} size="3x"/>
//                     <h3>DevOps & Automation</h3>
//                     <p>Once the application is built, I help clients set up DevOps testing, CI/CD pipelines, and deployment automation to support the successful Go-Live.</p>
//                     <div className="flex-chips">
//                         <span className="chip-title">Tech stack:</span>
//                         {labelsSecond.map((label, index) => (
//                             <Chip key={index} className='chip' label={label} />
//                         ))}
//                     </div>
//                 </div>

//                 <div className="skill">
//                     <FontAwesomeIcon icon={faGoogle} size="3x"/>
//                     <h3> Cloud Developer | Google Cloud Platform (GCP) </h3>
//                     <p>Experience in building serverless applications using <strong>Cloud Run Functions</strong>, managing large-scale data with <strong>BigQuery</strong>, and automating workflows via <strong>Cloud Storage</strong>. Designed end-to-end data pipelines, optimized performance, and ensured security through IAM policies and monitoring tools.</p>
//                     <div className="flex-chips">
//                         <span className="chip-title">Tech stack:</span>
//                         {labelsThird.map((label, index) => (
//                             <Chip key={index} className='chip' label={label} />
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//     );
// }

// export default Expertise;



import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNodeJs,
  faJs,
  faHtml5,
  faCss3,
  faPython,
  faAws,
  faGitAlt,
  faJira,
  faGoogle,
  faTrello,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faCloud, faCode } from "@fortawesome/free-solid-svg-icons";
import "../assets/styles/Expertise.scss";
import Marquee from "react-fast-marquee";

const skills = [
  { icon: faReact, name: "React JS" },
  { icon: faNodeJs, name: "Node.js" },
  { icon: faJs, name: "JavaScript" },
  { icon: faHtml5, name: "HTML5" },
  { icon: faCss3, name: "CSS3" },
  { icon: faPython, name: "Python" },
  { icon: faAws, name: "AWS" },
  { icon: faJira, name: "Jira" },
  { icon: faGitAlt, name: "Git" },
  { icon: faGoogle, name: "Google Cloud" },
  { icon: faDatabase, name: "Database" },
  { icon: faCloud, name: "Cloud" },
  { icon: faCode, name: "Coding" },
  { icon: faTrello, name: "Trello" },
];

function Expertise() {
  return (
      <div style={{ padding: "100px" }} id="expertise">
        <h2 style={{ textAlign: "center" }}>My Skills</h2>
        <Marquee gradient={false} speed={50} pauseOnHover={true}>
          {skills.map((skill, index) => (
            <div key={index} style={{ textAlign: "center", minWidth: "120px", margin: "0 20px" }}>
              <FontAwesomeIcon icon={skill.icon} size="3x" />
              <p style={{ marginTop: "5px", fontSize: "14px" }}>{skill.name}</p>
            </div>
          ))}
        </Marquee>
      </div>
  );
}

export default Expertise;
import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    
    return(
    <div className="projects-container" id="projects">
        <h1> Projects </h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><h2> NCOA GRPC Python Client - Stirista </h2></a>
                <p> The NCOA gRPC Python Client processes address change requests using gRPC, cloud functions, and Pub/Sub for automation. It updates address data, stores results in cloud storage, and analyzes them in BigQuery for seamless processing. </p>
            </div>
            <div className="project">
                <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><h2> Customer portfolio-Stirista </h2></a>
                <p> The project manages large-scale product, order, and customer data using Python and PostgreSQL. It leverages AWS Lambda for scalability, OpenSearch for fast queries, and RDS/DynamoDB for structured and NoSQL storage, ensuring efficient backend operations. </p>
            </div>
            <div className="project">
                <a href="https://legalremitnepal.com.au/" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://legalremitnepal.com.au/" target="_blank" rel="noreferrer"><h2> Legal Remit </h2></a>
                <p> This international money transfer project integrates the following third-party APIs and tools: Nepal Remit Money Transfer, Checkout, Vonage (for calls and SMS), Scantek (for digital verification), Zai Payment, Fraud.net (for compliance checks), and FastForex (for exchange rates).  
                    The project offers the following functionalities:  
                    Exchange rate management, 
                    Service charge calculation, 
                    Transaction processing, 
                    Compliance verification, 
                    Accounting management, 
                    Chat and call support,
                    Agent management                   
                </p>
            </div>
            <div className="project">
                <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><h2> Alles Health </h2></a>
                <p> This project is designed to securely store medical health report data while also identifying hospitals related to specific diseases. The system ensures that medical records are safely stored and easily accessible, providing a reliable way to digitize and safeguard health reports. Additionally, it helps users locate hospitals relevant to their medical conditions. React Native and Node.js were used for the front-end and back-end development, ensuring a seamless and responsive user experience.        
                </p>
            </div>
            <div className="project">
                <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer"><h2> Web Scraping </h2></a>
                <p>Scrap various websites to gather details about hotels, rooms, availability and other details.</p>
            </div>
            <div className="project">
                <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer"><h2> JYS Gladly API Integration - Stirista </h2></a>
                <p> This project involves developing a Cloud Run function that serves as an HTTP API to fetch data from a PostgreSQL database. The database consists of two tables: Order Header, which stores the main order details, and Order Line, which stores the item-level details corresponding to an order. The API is designed to support dynamic queries, allowing users to retrieve data based on various filters such as email, transaction number (trnNo), order date, phone number, and store. Additionally, this project includes input validations to ensure correct data is passed in the request and structured response formatting to provide clear and consistent API responses.</p>
            </div>
            {/* <div className="project">
                <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><h2>Multiple Regression Property Analysis</h2></a>
                <p>Analyzed the real estate market in Japan and predicted property prices by implementing statistical methods such as OLS and multi-regression analysis. This project leveraged Python and various libraries such as Pandas, NumPy, Matplotlib, and Scikit-Learn.</p>
            </div> */}
            {/* <div className="project">
                <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><h2>Programs of Study</h2></a>
                <p>Designed and developed a custom component for a CMS-based platform (e.g., 'Brightspot') using Java, Handlebars, and LESS. University students can find their majors of interest through this module.</p>
            </div> */}
            {/* <div className="project">
                <a href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix" target="_blank" rel="noreferrer"><h2>Transfer Evaluation Matrix</h2></a>
                <p>Created an interactive CSV table generator with Java, Handlebars, and LESS. This project helps transfer students to quickly identify eligible credits.</p>
            </div>
            <div className="project">
                <a href="https://github.com/yujisatojr/submeowrine" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/yujisatojr/submeowrine" target="_blank" rel="noreferrer"><h2>Submeowrine</h2></a>
                <p>Developed and released an Android mobile application using Java and Android Studio that runs a 2D shooting game.</p>
            </div> */}
        </div>
    </div>
    );
}

export default Project;
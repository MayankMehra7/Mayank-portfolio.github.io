import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import ExperienceContent from "./ExperienceContent";
import { FaBriefcase } from "react-icons/fa";
import ReactGA from "react-ga";

function Experience() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Container fluid className="Experience-section"> 
      <Particle />
      <Container>
        <Row className="Experience">
          <Col md={6} className="Experience-column">
            <h3 className="Experience-title"><FaBriefcase /> Professional Experiences</h3>


            <ExperienceContent
              title="MIST AI Intern [Juniper Networks]"
              date="October 2024 - December 2024"
              content={[
                "Understood core concepts of Mist AI, including AI-powered insights, automation, and user experience optimization in enterprise networking.",
                "Applied theoretical knowledge via interactive modules and real-world problem-solving tasks.",
                "Strengthened skills in networking, AI integration, and automation relevant to modern enterprise IT environments.",


                
              ]}
            />
          
            <ExperienceContent
              title="Python Full stack webdevlopment Intern [Eduskills]"
              date="October 2024 - December 2024"
              content={[
                "Gained relevant skills and experience in Full-Stack Web Development",
                "It offers a comprehensive, hands-on training experience, focusing on building a real-world web product using the MERN stack and React..",
                
              ]}
            />
            <ExperienceContent
              title="Data Analytics Intern [Alteryx Inc.]"
              date="July 2024 - September 2024"
              content={[
                "Gained expertise in data preparation, transformation and automation using Alteryx Designer by completing the Alteryx Data Analytics Process Automation Virtual Internship.",
                "Extended practical experience and deepened theoretical knowledge through hands-on exercises and a capstone project.",
                "Preparation for the Alteryx Designer Core Certification, gaining skills that can be applied to real-world data analytics projects.",
              ]}
            />
            <ExperienceContent
              title="ML Intern [Emami Ltd]"
              date="June 2024 - August 2024"
              content={[
                "Completed an internship focusing on web scraping and sentiment analysis for selected Emami products.",
                "Worked on various sub-projects involving matrix & eigenvectors, regression, clustering and convolutional neural networks (CNNs).",
                "Gained hands-on experience in these areas, contributing to data-driven insights and product analysis.",
              ]}
            />
            <ExperienceContent
              title="Data Science Intern [Altair]"
              date="April 2024 -  June 2024"
              content={[
                "Gain expertise in data visualisation, predictive modelling and machine learning by completing the Altair Data Science Master Internship.",
                "Achieved high marks in the final assessment. Demonstrated a strong ability to apply advanced data science concepts to real-world challenges.",
                "Leveraging cutting-edge tools and techniques, you will be equipped with the practical skills to contribute effectively to data-driven projects.",
              ]}
            />
            <ExperienceContent
              title="Full Stack Web Devlopment Intern [WebStack Academy]"
              date="Feburary 2024 - April 2024"
              content={[
                "Successful development and deployment of Homely Hub, a MERN stack hotel booking application, achieving a mark of 90% for the work placement project.",
                "It was developed and implemented responsive UI using React.js to ensure smooth user navigation, using Node.js and Express to develop robust backend functionality for efficient booking processes and database operations.",
                "Implemented user authentication and authorization using JWT and Passport.js, ensuring secure access to user data and booking information.",
                
              ]}
            />
            <ExperienceContent
              title="AI-ML Intern [GoogleForDevlopers]"
              date="January 2024 - March 2024"
              content={[
                "Gain a deep understanding of cloud concepts and a wide range of AWS services through a comprehensive AWS course",
                "Prepared to address real-world challenges using AWS solutions with practical skills to design, deploy and manage robust cloud architectures.",
                "Equipped to leverage the scalability, security, and innovation of AWS for organisational success and to pursue further certifications and specialisations in the AWS ecosystem.",
              ]}
            />
            <ExperienceContent
              title="AI-ML Intern [Aws Academy]"
              date="September 2023 - November 2023"
              content={[
                "Completed an internship focused on deploying AI/ML solutions using AWS Academy's cloud infrastructure and services.",
                "Worked on sub-projects involving model training, data preprocessing, and deployment using AWS tools like SageMaker and Lambda.",
                "Gained hands-on experience in cloud-based machine learning workflows and real-world AI application development."

              ]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;

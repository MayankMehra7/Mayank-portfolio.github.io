import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import pen_classifier from "../../Assets/Projects/penguin.jpeg";
import color_detect from "../../Assets/Projects/color_detect.jpeg";
import cat_dog from "../../Assets/Projects/cats-dogs.png";
import stock from "../../Assets/Projects/stock-market.jpg";
import iris_classifier from "../../Assets/Projects/iris_classifier.png";
import cvgame from "../../Assets/Projects/cv-game.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple"> Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've made recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stock}
              isBlog={false}
              title="Stock Management"
              description="Developed a stock management application with a Streamlit front-end. The application takes an investment amount as input and provides recommendations on the best stocks to buy, along with suggested quantities."
              ghLink="https://github.com/MayankMehra7/Stock-Management-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cvgame}
              isBlog={false}
              title="Computer Vision Game"
              description="Developed a computer vision game using XGBoost and CNN for model processing, with React as the front-end interface, enabling interaction through computer vision techniques."
              ghLink="https://github.com/MayankMehra7/Treasuretrove1.github.io"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cat_dog}
              isBlog={false}
              title="CNN Classifier on Cat and Dog Images"
              description="Developed a CNN classifier to differentiate between cat and dog images. Trained on labeled data, the model uses convolutional layers for feature extraction, achieving high accuracy in image classification."
              ghLink="https://github.com/MayankMehra7/CNN-Cat-and-Dog"
                          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pen_classifier}
              isBlog={false}
              title="Penguin Classifier"
              description="Developed a penguin image classifier using a CNN to identify different species based on features like size and color. It aids in wildlife research by providing accurate species identification."
              ghLink="https://github.com/MayankMehra7/penguin-clf-features-heroku"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iris_classifier}
              isBlog={false}
              title="Iris Species Detection"
              description="Created a model for iris species detection using machine learning. The classifier identifies species based on petal and sepal features, enhancing botanical research and species identification accuracy."
              ghLink="https://github.com/MayankMehra7/iris-species-clf-heroku"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={color_detect}
              isBlog={false}
              title="Colour Detection"
              description="Developed a real-time colour detection model using OpenCV that captures live video and applies colour space conversion and thresholding techniques to dynamically identify specific colours. Applications include robotics, industrial sorting and accessibility. "
              ghLink="https://github.com/MayankMehra7/Color-detection"
           
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

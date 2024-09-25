import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from '../../Assets/avatar.jpg';

import Tilt from "react-parallax-tilt";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: '2.6em' }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm driven to unlock the limitless potential of the ever-evolving world of AI and data science.
              <br />
              <br />
              I create intelligent, cutting-edge solutions using a versatile toolkit including
              <i>
                <b className="purple"> Python, C/C++, and JavaScript</b>
              </i>
              . I'm passionate about pushing the boundaries of what's possible with technology and
              <i>
                <b className="purple"> transforming raw data into actionable insights</b>
              </i>.
              <br />
              <br />
              I thrive at the intersection of
              <b className="purple"> AI, web technologies, and cloud-based solutions</b>,
              from training neural networks with
              <i>
                <b className="purple"> TensorFlow and PyTorch</b>
              </i>
              , to building seamless user experiences with
              <i>
                <b className="purple"> React.js and Node.js</b>
              </i>.
              <br />
              <br />
              Let's transform your data challenges into groundbreaking opportunities—ready to collaborate and innovate!
            </p>
          </Col>
          <Col md={4} className="myAvtar">
              <Tilt>
                <img src={myImg} className="img-fluid" alt="avatar" />
              </Tilt>
            </Col>
          

        </Row>
        <Row>

        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

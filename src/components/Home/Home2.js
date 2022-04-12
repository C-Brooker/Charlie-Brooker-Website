import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import codeavatar2 from "../../Assets/codeavatar2.svg";
import Tilt from "react-parallax-tilt";
import Particle from "../Particle";
import SocialsLinks from "../SocialsLinks";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Particle/>
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="theme-color"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a self-taught programmer with a love for solving real-world
              problems with tech!
              <br />
              <br />I work mainly with classics like
              <i>
                <b className="theme-color"> Java, Javascript and Python. </b>
              </i>
              I love to learn, I am a wiz with 
              <b className="theme-color"> 
                {" "}
                MERN Stack, PERN Stack and Django!
              </b>
              <br />
              <br />
              My field of Interest's are building new&nbsp;
              <i>
                <b className="theme-color">Web-Based Applications</b> that help
                to{" "}
                <b className="theme-color">
                 Make people's live's easier.
                </b>
              </i>
              <br />
              <br />
              I am currently widening my skillset and learning about building 
              <i>
                <b className="theme-color">
                  {" "}
                  Large Scale Applications.
                </b>
              </i>
              &nbsp; Specifically, I am learning about
              <i>
                <b className="theme-color">
                  {" "}
                  Microservices, Design, Data Structures and Algorithms!
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={codeavatar2} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>
              GET IN 
              <span className="theme-color">
                {" "}
                TOUCH!
              </span>
            </h1>
            <p>
              Feel free to <span className="theme-color">connect </span>with me
            </p>
            <SocialsLinks/>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

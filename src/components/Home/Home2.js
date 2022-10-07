import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import programmer2 from "../../Assets/programmer2.svg";
import Tilt from "react-parallax-tilt";
import Particle from "../Particle";
import SocialsLinks from "../SocialsLinks";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Particle />
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="theme-color"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a self-taught programmer with a love for solving real-world
              problems with tech! I am interested in building new
              <i>
                <b className="theme-color"> services and applications</b> that
                help to <b className="theme-color">improve people's lives.</b>
              </i>
              <br />
              <br />I am currently an{" "}
              <b className="theme-color">undergraduate student </b>
              actively looking to develop my skills and career through
              <b className="theme-color"> opportunities </b>
              at innovative companies.
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={programmer2} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>
              GET IN
              <span className="theme-color"> TOUCH!</span>
            </h1>
            <p>
              Feel free to <span className="theme-color">connect </span>with me
            </p>
            <SocialsLinks />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

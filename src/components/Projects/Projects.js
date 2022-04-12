import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import dcfcalculator from "../../Assets/Projects/dcfcalculator.png";
import workrate from "../../Assets/Projects/workrate.png";
import icrypt from "../../Assets/Projects/icrypt.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="theme-color">projects </strong> in <strong className="theme-color">2022</strong>.
        </h1>
        <p style={{ color: "white" }}>
          Here is what I have been working on this year.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={workrate}
              isBlog={false}
              title="WorkRate"
              description="After hearing from friends about some of the negative experiences that they had with internships, I created a platform that increases transparency between companies and applicants with regards to workplace culture. This social media site allows employees to anonymously rate their workplace and leave reviews. Built with MERN stack and redux.js."
              link="https://workrate.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={icrypt}
              isBlog={false}
              title="iCrypt"
              description="After learning about blockchain and Web3 development, I created my first Decentralized-Application which is an interface that allows users to manage transactions on the Ethereum blockchain. I used Solidity to write contracts for token transfers and I used Web3.js and Truffle to integrate it with my client-side."
              link="https://iCrypt.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dcfcalculator}
              isBlog={false}
              title="DCF Calculator"
              description="After learning about investment valuation techniques on my university course, I realised that the research process is monotonous and time-inefficient. As a result, I used Python and Django to scrape the web for financial statement data and perform the calculations for me, given some estimates."
              link="https://dcf-calculator-django.netlify.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="theme-color">projects </strong> in{" "}
          <strong className="theme-color">2022</strong>.
        </h1>
        <p style={{ color: "white" }}>
          Here is what I have been{" "}
          <strong className="theme-color">working on </strong> this year
          alongside my studies.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              //imgPath={}
              isBlog={false}
              title=""
              description=""
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              //imgPath={}
              isBlog={false}
              title=""
              description=""
              link=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              //imgPath={}
              isBlog={false}
              title=""
              description=""
              link=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

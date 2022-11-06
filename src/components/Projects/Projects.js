import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ExerciseTrackr from "../../Assets/Projects/ExerciseTrackr.PNG";

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
              imgPath={ExerciseTrackr}
              isBlog={false}
              title="ExerciseTrackr"
              description="Exercise Trackr is a full-stack CRUD web application which displays exercise entries that can be deleted, updated and added to. built with react.js, tailwind and mongoDB."
              link="https://papaya-entremet-993462.netlify.app/"
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

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import codeavatar1 from "../../Assets/codeavatar1.svg";
import Particle from "../Particle";
import Tilt from "react-parallax-tilt";
import Home2 from "./Home2";
import Type from "./Type";
 
function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I am actively looking to
                <strong className="main-name">
                  {" "}
                  work
                  {" "}
                </strong>
                for an amazing company for
                <strong className="main-name">
                  {" "}
                  summer 2022!
                </strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type strings={[
                  "Full stack developer",
                  "Software development",
                  "PERN stack developer", 
                  "Agile methodology", 
                  "MERN stack developer",
                  "Test driven development",
                ]}/>

              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
            <Tilt>
              <img
                src={codeavatar1}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Tilt>
            </Col>
          </Row>
        </Container>
        <Home2 />
      </Container>
    </section>
  );
}

export default Home;

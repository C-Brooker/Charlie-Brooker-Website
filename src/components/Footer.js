import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import SocialsLinks from "./SocialsLinks";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Want to reach out?</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Get in contact!</h3>
        </Col>
        <SocialsLinks/>
      </Row>
    </Container>
  );
}

export default Footer;

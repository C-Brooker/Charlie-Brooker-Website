import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ben Brooker </span>
            from <span className="purple"> United Kingdom.</span>
            <br />I am a student pursuing BSc in <span className="purple">Economics and Finance </span>
            at the <span className="purple"> University of St Andrews</span>
            <br />
            <br />
            Why would an <span className="purple">Economics student </span> get into tech?
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> I can use tech to solve business problems!
            </li>
            <li className="about-activity">
              <ImPointRight /> My mathematical brain loves problems-solving.
            </li>
            <li className="about-activity">
              <ImPointRight /> There is always so much to learn!
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I want to be like Tony Stark when I grow up"{" "}
          </p>
          <footer className="blockquote-footer">Ben</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

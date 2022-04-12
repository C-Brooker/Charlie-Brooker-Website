import React from "react";
import Card from "react-bootstrap/Card";
import { BsArrowRightShort } from "react-icons/bs";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", paddingRight: "30px"}}>
            Hi Everyone, I am <span className="theme-color">Ben Brooker </span>
            from <span className="theme-color"> United Kingdom.</span>
            <br/>
            <br />
            I am a student pursuing BSc in <span className="theme-color">Economics and Finance </span>
            at the <span className="theme-color"> University of St Andrews</span>, Scotland.
            <br />
            <br />
            Why would an <span className="theme-color">Economics student </span> get into tech?
          </p>
          <ul>
            <li className="about-activity">
              <BsArrowRightShort /> I can use tech to solve business problems!
            </li>
            <li className="about-activity">
              <BsArrowRightShort /> My mathematical brain loves problems-solving.
            </li>
            <li className="about-activity">
              <BsArrowRightShort /> There is always so much to learn!
            </li>
          </ul>

          <p className="blockquote2">
            "I want to be like Tony Stark when I grow up"{" "}
          </p>
          <footer className="blockquote-footer">Ben</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

import React from "react";
import Card from "react-bootstrap/Card";
import { BsArrowRightShort } from "react-icons/bs";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", paddingRight: "30px" }}>
            Hi Everyone, I am{" "}
            <span className="theme-color">Charlie Brooker </span>
            from <span className="theme-color"> United Kingdom.</span> I am an
            undergraduate student currently studying{" "}
            <span className="theme-color">Computer Science </span>
            at <span className="theme-color"> Aston University</span>
            <br />
            <br />
            Why did <span className="theme-color"> I </span> get into tech?
            <ul>
              <li className="about-activity">
                <BsArrowRightShort /> There is creativity in innovating
                solutions!
              </li>
              <li className="about-activity">
                <BsArrowRightShort /> My mathematical brain loves
                problem-solving.
              </li>
              <li className="about-activity">
                <BsArrowRightShort /> There is always so much to learn!
              </li>
            </ul>
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

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
            from <span className="theme-color"> United Kingdom.</span>
            <br />
            <br />I am currently studying{" "}
            <span className="theme-color">Computer Science </span>
            at <span className="theme-color"> Aston University</span>
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

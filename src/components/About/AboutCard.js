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
            I hold a BSc in <span className="theme-color">Economics and Finance </span>
            from the <span className="theme-color"> University of St Andrews</span>, Scotland 
            {" (Ranked "}
            <a 
            className="theme-color" 
            href="https://www.theguardian.com/education/2022/sep/24/stoxbridge-st-andrews-overtakes-oxford-cambridge-guardian-university-guide" 
            target="_blank" 
            rel="noreferrer"> 
              {"1st in the UK"}
            </a> 
            {" at time of graduation)."}
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
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

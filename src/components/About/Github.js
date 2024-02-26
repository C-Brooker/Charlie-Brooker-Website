import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        My recent <strong className="theme-color">activity</strong>
      </h1>
      <GitHubCalendar
        username="CharlieB22"
        blockSize={15}
        blockMargin={5}
        color="#16c6ef"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;

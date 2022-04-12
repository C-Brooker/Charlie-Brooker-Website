import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "MERN Stack",
          "Software Engineer",
          "PERN Stack", 
          "Data structures & Algorithms",
          "Testing", 
          "Blockchain"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;

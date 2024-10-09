import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row
      style={{
        justifyContent: "center", 
        paddingBottom: "10px", 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center",  // Aligns items in the center
        textAlign: "center",   // Centers text inside
        position: "relative",   // Add this to establish a positioning context
      }}
    >
      {/* Wrapping only the text in an anchor tag */}
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        <a
          href="https://github.com/MayankMehra7"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none", 
            color: "inherit",
            cursor: "pointer", // Ensures the link is clickable
            zIndex: 10, // Ensures the link is on top of other elements
            display: "inline-block", // Ensures the anchor takes only the space of the text
            position: "relative", // Helps in positioning if needed
          }}
        >
          Days I <strong className="purple">Code</strong>
        </a>
      </h1>

      {/* GitHub calendar (clickable part) */}
      <GitHubCalendar
        username="MayankMehra7"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;

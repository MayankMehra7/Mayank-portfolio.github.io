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
        alignItems: "center",
        textAlign: "center",
        position: "relative",
        // height: "100vh", // Set the height to occupy full viewport height
      }}
    >
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        <a
          href="https://github.com/MayankMehra7"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            color: "inherit",
            cursor: "pointer",
            zIndex: 10,
            display: "inline-block",
            position: "relative",
          }}
        >
          Days I <strong className="purple">Code</strong>
        </a>
      </h1>

      {/* Center the GitHub calendar at the bottom */}
      <div style={{display: "flex", justifyContent: "center" }}>
        <a
          href="https://github.com/MayankMehra7"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            color: "inherit",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <GitHubCalendar
            username="MayankMehra7"
            blockSize={15}
            blockMargin={5}
            color="#c084f5"
            fontSize={16}
          />
        </a>
      </div>
    </Row>
  );
}

export default Github;

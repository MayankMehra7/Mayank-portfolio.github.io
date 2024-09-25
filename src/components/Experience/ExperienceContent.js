import React from "react";

function ExperienceContent(props) {
  return (
    <div className="Experience-item">
      <h5 className={props.title ? "Experience-title" : "Experience-no-title"}>
        {props.title}
      </h5>
      <p>
        <em>{props.date}</em>
      </p>
      <ul>
        {props.content.map((value, index) => (
          <li key={index}> ‣ {value}</li>
        ))}
      </ul>
    </div>
  );
}

export default ExperienceContent;

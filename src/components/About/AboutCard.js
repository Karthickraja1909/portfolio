import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">karthick raja </span>
            from <span className="purple"> Chennai, India.</span>
            <br /> I am  graduate in B.E. in Computer Science Engineering.
            <br />
            Currently I am learning and developing user interactive websites & web applications and also to be a software engineer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do !
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to music
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Practice Makes A Man Perfect"{" "}
          </p>
          <footer className="blockquote-footer">karthi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

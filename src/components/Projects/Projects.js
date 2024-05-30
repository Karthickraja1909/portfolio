import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/course.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import sa2 from "../../Assets/Projects/2.png";
import sa1 from "../../Assets/Projects/Sentiment-Analysis-1.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong> and <strong className="purple">Experience </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently. and the work experience.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px", } }>
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Course Reservation System"
              description="A Course Reservation System is a software application designed to streamline the process of course enrollment, scheduling, and management for students, instructors, and administrators."
              ghLink="https://github.com/Karthickraja1909/Course-reservation-system"
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Portfolio"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/Karthickraja1909/portfolio"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sa1}
              isBlog={false}
              title="Sentimental Analysis Microservice"
              description="A microservice that performs real-time sentiment analysis on text data to determine its emotional tone."
              ghLink="https://github.com/Karthickraja1909/Sentimental-Analysis-Microservice"
  
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sa2}
              isBlog={false}
              title="Sentiment Analysis Machine Learning Flask Python Web App"
              description="A web application built with Flask and Python that performs sentiment analysis using machine learning models to classify text dataset."  
              ghLink="https://github.com/Karthickraja1909/Sentiment-Analysis-Machine-Learning-Flask-Python-Web-App"   
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPowerbi,
  SiAndroidstudio,
  SiJupyter,
  SiMicrosoftexcel,
  
  
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
       <Col xs={4} md={2} className="tech-icons">
       <SiPowerbi />
      </Col>
    
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
      <SiMicrosoftexcel />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <SiJupyter />
      </Col>
    
      <Col xs={4} md={2} className="tech-icons">
      <SiAndroidstudio />
      </Col>
    </Row>
  );
}

export default Toolstack;

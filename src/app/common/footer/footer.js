import * as React from "react";
import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <Container
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        height: "30px",
        padding: "6px",
      }}
    >
      <div className="d-flex" style={{height: '30px'}}>
        <span>Pedro Daleth López López</span>
        <span>plopezlopez3@icloud.com</span>
        <span>Technical Test Zebrands</span>
      </div>
    </Container>
  );
}

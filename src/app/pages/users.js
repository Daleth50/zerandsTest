import * as React from "react";
import { Button, Col, Container, Form, Row, Stack } from "react-bootstrap";

export default function UsersComponents() {

  return (
    <Container style={{ flex: 1, padding: 15, justifyContent: "center" }}>
      <Row xs={1} md={2}>
        <Col>
          <h5>Users</h5>
        </Col>
        <Col>
          <Form className="d-flex">
            <Form.Control
              autoFocus
              type="search"
              placeholder="Search users"
              className="me-2"
              aria-label="Search users"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Col>
      </Row>
      <Stack className="pt-2" gap={3}>
        <div className="bg-light border">First item</div>
        <div className="bg-light border">Second item</div>
        <div className="bg-light border">Third item</div>
      </Stack>
    </Container>
  );
}

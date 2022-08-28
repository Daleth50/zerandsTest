import { faBoxArchive, faPerson } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function HomeComponent(props) {
  const navigate = useNavigate();

  const goNavigate = (route) => {
    navigate(route);
  };

  const RenderCard = ({ title, body, route, icon = faPerson }) => (
    <Card
      //   onClick={() => goNavigate(route)}
      style={{ margin: 5 }}
    >
      <Card.Body style={{ textAlign: "center" }}>
        <FontAwesomeIcon style={{ padding: 2 }} size="10x" icon={icon} />
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <div>{body}</div>
        </Card.Text>
        <Button
          style={{ alignSelf: "flex-end" }}
          block
          onClick={() => goNavigate(route)}
          variant="primary"
        >
          Go search
        </Button>
      </Card.Body>
    </Card>
  );

  return (
    <Container style={{ flex: 1, padding: 15, justifyContent: "center" }}>
      <div style={{ textAlign: "center", }}>
        <h2>Hi there, what do you want to do today?</h2>
        <h5>You can either search for users and contacts</h5>
      </div>
      <div style={{ justifyContent: "center", alignContent: "center" }}>
        <Row className="justify-content-md-center" xs={1} md={4}>
          <Col>
            <RenderCard
              title="Users"
              body="Search for Github users"
              route="users"
              icon={faPerson}
            />
          </Col>
          <Col>
            <RenderCard
              title="Repositories"
              body="Search for Github repositories"
              route="repositories"
              icon={faBoxArchive}
            />
          </Col>
        </Row>
      </div>
    </Container>
  );
}

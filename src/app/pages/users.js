import axios from "axios";
import * as React from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import Search from "../common/search/search";
import config from "../config/app.config";

export default function UsersComponents() {
  const [search, setSearch] = React.useState("");
  const [working, setWorking] = React.useState(false);
  const [results, setResults] = React.useState([]);

  React.useEffect(() => {
    const getUsers = () => {
      setWorking(true);
      axios
        .get(config.api.url + "search/users", {
          params: { q: search },
          headers: config.api.headers,
        })
        .then((response) => {
          setWorking(false);
          setResults(response.data.items);
        })
        .catch((error) => {
          setWorking(false);
        });
    };
    if (!working) {
      getUsers();
    }
  }, [search]);

  const RenderResults = () => {
    return results.map((el) => (
      <div className="pt-4">
        <Card>
          <Image thumbnail src={el.avatar_url} />
          <Card.Body>
            <Card.Title>
              <div style={{ textAlign: "justify" }}>
                <h2>{el.login}</h2>
              </div>
            </Card.Title>
            <Card.Subtitle>
              <div style={{ textAlign: "justify" }}>
                <h5>
                  <a target={"_blank"}  rel="noreferrer"  href={el.html_url}>
                    {el.url}
                  </a>
                </h5>
              </div>
            </Card.Subtitle>
            <Card.Text>
              <div style={{ textAlign: "justify" }}>
                <div>
                  <span style={{ paddingLeft: 2 }}>{el.bio}</span>
                </div>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    ));
  };

  return (
    <Container style={{ flex: 1, padding: 15, justifyContent: "center" }}>
      <Row xs={1} md={2}>
        <Col>
          <h2>Users</h2>
        </Col>
        <Col>
          <Search setSearch={setSearch} placeHolder="Search for a user" />
        </Col>
      </Row>

      {/* no results */}
      {results.length === 0 && (
        <div className="pt-4">
          <Card style={{ width: "100%" }}>
            <Card.Body>
              <Card.Title>No information to display</Card.Title>
              <Card.Text>
                When you search for a user their info will be displayed here.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      )}

      {results && (
        <Row xs={1} md={2}>
          <RenderResults />
        </Row>
      )}
    </Container>
  );
}

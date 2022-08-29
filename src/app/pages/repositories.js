import axios from "axios";
import * as React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Search from "../common/search/search";
import config from "../config/app.config";

export default function RepositoriesComponent(props) {
  const [search, setSearch] = React.useState("");
  const [working, setWorking] = React.useState(false);
  const [results, setResults] = React.useState([]);

  React.useEffect(() => {
    const getRepos = () => {
      setWorking(true);
      axios
        .get(config.api.url + "search/repositories", {
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
      getRepos();
    }
  }, [search]);

  const RenderResults = () => {
    return results.map((el) => (
      <div className="pt-4">
        <Card style={{ boxShadow: "2px" }}>
          <Card.Body>
            <Card.Title>
              <div style={{ textAlign: "end" }}>
                <h2>{el.name}</h2>
                <h4>
                  Owner:{" "}
                  <a target={"_blank"} href={el.owner.html_url}>
                    {el.owner.login}
                  </a>
                </h4>
              </div>
            </Card.Title>
            <Card.Subtitle>
              <div style={{ textAlign: "end" }}>
                <h5>
                  <a target={"_blank"} href={el.html_url}>
                    {el.url}
                  </a>
                </h5>
              </div>
            </Card.Subtitle>
            <Card.Text>
              <div style={{ textAlign: "end" }}>
                <div>
                  <span
                    style={{
                      paddingLeft: 2,
                      textOverflow: "ellipsis",
                    }}
                  >
                    {el.description}
                  </span>
                </div>
                <div>
                  <span>
                    Created: {new Date(el.created_at).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    ));
  };

  return (
    <Container
      style={{
        flex: 1,
        padding: 15,
        justifyContent: "center",
        overflow: "auto",
        height: "100%",
      }}
    >
      <Row xs={1} md={2}>
        <Col>
          <h2>Repositories</h2>
        </Col>
        <Col>
          <Search setSearch={setSearch} placeHolder="Search for a repository" />
        </Col>
      </Row>

      {/* no results */}
      {results.length === 0 && (
        <div className="pt-4">
          <Card style={{ width: "100%" }}>
            <Card.Body>
              <Card.Title>No information to display</Card.Title>
              <Card.Text>
                When you search for a repository info will be displayed here.
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

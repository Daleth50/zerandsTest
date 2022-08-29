import {
  faEnvelope,
  faLocation,
  faLocationDot,
  faLocationPin,
  faMailBulk,
  faMarker,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import * as React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Image,
  Row,
  Stack,
} from "react-bootstrap";
import Search from "../common/search/search";
import appConfig from "../config/app.config";

export default function RepositoriesComponent(props) {
  const [search, setSearch] = React.useState("");
  const [working, setWorking] = React.useState(false);
  const [results, setResults] = React.useState([]);

  React.useEffect(() => {
    if (!working && search !== "") {
      getRepos();
    }
    // if (search === "") {
    //   setResults(null);
    // }
  }, [search]);

  const getRepos = () => {
    setWorking(true);
    axios
      .get(appConfig.api.url + "search/repositories", {
        params: { q: search },
        headers: appConfig.api.headers,
      })
      .then((response) => {
        setWorking(false);
        setResults(response.data.items);
        console.log(response);
      })
      .catch((error) => {
        setWorking(false);
        console.log(error);
      });
  };

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
          <Search setSearch={setSearch} placeHolder="Search for a user" />
        </Col>
      </Row>
      {results.length === 0 && (
        <div className="pt-4">
          <Card style={{ width: "100%" }}>
            <Card.Body>
              <Card.Title>No information to display</Card.Title>
              <Card.Text>
                When you search for a repository their info will be displayed
                here.
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

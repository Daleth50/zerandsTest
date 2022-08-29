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

export default function UsersComponents() {
  const [search, setSearch] = React.useState("");
  const [working, setWorking] = React.useState(false);
  const [results, setResults] = React.useState({
    login: "octocat",
    id: 1,
    node_id: "MDQ6VXNlcjE=",
    avatar_url: "https://github.com/images/error/octocat_happy.gif",
    gravatar_id: "",
    url: "https://api.github.com/users/octocat",
    html_url: "https://github.com/octocat",
    followers_url: "https://api.github.com/users/octocat/followers",
    following_url:
      "https://api.github.com/users/octocat/following{/other_user}",
    gists_url: "https://api.github.com/users/octocat/gists{/gist_id}",
    starred_url: "https://api.github.com/users/octocat/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/octocat/subscriptions",
    organizations_url: "https://api.github.com/users/octocat/orgs",
    repos_url: "https://api.github.com/users/octocat/repos",
    events_url: "https://api.github.com/users/octocat/events{/privacy}",
    received_events_url: "https://api.github.com/users/octocat/received_events",
    type: "User",
    site_admin: false,
    name: "monalisa octocat",
    company: "GitHub",
    blog: "https://github.com/blog",
    location: "San Francisco",
    email: "octocat@github.com",
    hireable: false,
    bio: "There once was...",
    twitter_username: "monatheoctocat",
    public_repos: 2,
    public_gists: 1,
    followers: 20,
    following: 0,
    created_at: "2008-01-14T04:33:35Z",
    updated_at: "2008-01-14T04:33:35Z",
  });

  React.useEffect(() => {
    if (!working && search !== "") {
      getUsers();
    }
    // if (search === "") {
    //   setResults(null);
    // }
  }, [search]);

  const getUsers = () => {
    setWorking(true);
    axios
      .get(appConfig.api.url + "users/" + search, {
        headers: appConfig.api.headers,
      })
      .then((response) => {
        setWorking(false);
        setResults(response.data);
        console.log(response);
      })
      .catch((error) => {
        setWorking(false);
        console.log(error);
      });
  };
  return (
    <Container style={{ flex: 1, padding: 15, justifyContent: "center" }}>
      <Row xs={1} md={2}>
        <Col>
          <h5>Users</h5>
        </Col>
        <Col>
          <Search setSearch={setSearch} placeHolder="Search users" />
        </Col>
      </Row>
      {!results && (
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
        <div className="pt-4">
          <Card style={{ width: "100%" }}>
            <Row md={3}>
              <Col>
                <Image thumbnail src={results.avatar_url} />
              </Col>
              <Col>
                <Card.Body>
                  <Card.Title>{results.name}</Card.Title>
                  <Card.Text>
                    When you search for a user their info will be displayed
                    here.
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </div>
      )}
    </Container>
  );
}

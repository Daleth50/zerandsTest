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
  const [results, setResults] = React.useState([
    {
      id: 3081286,
      node_id: "MDEwOlJlcG9zaXRvcnkzMDgxMjg2",
      name: "Tetris",
      full_name: "dtrupenn/Tetris",
      owner: {
        login: "dtrupenn",
        id: 872147,
        node_id: "MDQ6VXNlcjg3MjE0Nw==",
        avatar_url:
          "https://secure.gravatar.com/avatar/e7956084e75f239de85d3a31bc172ace?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
        gravatar_id: "",
        url: "https://api.github.com/users/dtrupenn",
        received_events_url:
          "https://api.github.com/users/dtrupenn/received_events",
        type: "User",
        html_url: "https://github.com/octocat",
        followers_url: "https://api.github.com/users/octocat/followers",
        following_url:
          "https://api.github.com/users/octocat/following{/other_user}",
        gists_url: "https://api.github.com/users/octocat/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/octocat/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/octocat/subscriptions",
        organizations_url: "https://api.github.com/users/octocat/orgs",
        repos_url: "https://api.github.com/users/octocat/repos",
        events_url: "https://api.github.com/users/octocat/events{/privacy}",
        site_admin: true,
      },
      private: false,
      html_url: "https://github.com/dtrupenn/Tetris",
      description: "A C implementation of Tetris using Pennsim through LC4",
      fork: false,
      url: "https://api.github.com/repos/dtrupenn/Tetris",
      created_at: "2012-01-01T00:31:50Z",
      updated_at: "2013-01-05T17:58:47Z",
      pushed_at: "2012-01-01T00:37:02Z",
      homepage: "https://github.com",
      size: 524,
      stargazers_count: 1,
      watchers_count: 1,
      language: "Assembly",
      forks_count: 0,
      open_issues_count: 0,
      master_branch: "master",
      default_branch: "master",
      score: 1,
      archive_url:
        "https://api.github.com/repos/dtrupenn/Tetris/{archive_format}{/ref}",
      assignees_url:
        "https://api.github.com/repos/dtrupenn/Tetris/assignees{/user}",
      blobs_url: "https://api.github.com/repos/dtrupenn/Tetris/git/blobs{/sha}",
      branches_url:
        "https://api.github.com/repos/dtrupenn/Tetris/branches{/branch}",
      collaborators_url:
        "https://api.github.com/repos/dtrupenn/Tetris/collaborators{/collaborator}",
      comments_url:
        "https://api.github.com/repos/dtrupenn/Tetris/comments{/number}",
      commits_url: "https://api.github.com/repos/dtrupenn/Tetris/commits{/sha}",
      compare_url:
        "https://api.github.com/repos/dtrupenn/Tetris/compare/{base}...{head}",
      contents_url:
        "https://api.github.com/repos/dtrupenn/Tetris/contents/{+path}",
      contributors_url:
        "https://api.github.com/repos/dtrupenn/Tetris/contributors",
      deployments_url:
        "https://api.github.com/repos/dtrupenn/Tetris/deployments",
      downloads_url: "https://api.github.com/repos/dtrupenn/Tetris/downloads",
      events_url: "https://api.github.com/repos/dtrupenn/Tetris/events",
      forks_url: "https://api.github.com/repos/dtrupenn/Tetris/forks",
      git_commits_url:
        "https://api.github.com/repos/dtrupenn/Tetris/git/commits{/sha}",
      git_refs_url:
        "https://api.github.com/repos/dtrupenn/Tetris/git/refs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/dtrupenn/Tetris/git/tags{/sha}",
      git_url: "git:github.com/dtrupenn/Tetris.git",
      issue_comment_url:
        "https://api.github.com/repos/dtrupenn/Tetris/issues/comments{/number}",
      issue_events_url:
        "https://api.github.com/repos/dtrupenn/Tetris/issues/events{/number}",
      issues_url:
        "https://api.github.com/repos/dtrupenn/Tetris/issues{/number}",
      keys_url: "https://api.github.com/repos/dtrupenn/Tetris/keys{/key_id}",
      labels_url: "https://api.github.com/repos/dtrupenn/Tetris/labels{/name}",
      languages_url: "https://api.github.com/repos/dtrupenn/Tetris/languages",
      merges_url: "https://api.github.com/repos/dtrupenn/Tetris/merges",
      milestones_url:
        "https://api.github.com/repos/dtrupenn/Tetris/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/dtrupenn/Tetris/notifications{?since,all,participating}",
      pulls_url: "https://api.github.com/repos/dtrupenn/Tetris/pulls{/number}",
      releases_url:
        "https://api.github.com/repos/dtrupenn/Tetris/releases{/id}",
      ssh_url: "git@github.com:dtrupenn/Tetris.git",
      stargazers_url: "https://api.github.com/repos/dtrupenn/Tetris/stargazers",
      statuses_url:
        "https://api.github.com/repos/dtrupenn/Tetris/statuses/{sha}",
      subscribers_url:
        "https://api.github.com/repos/dtrupenn/Tetris/subscribers",
      subscription_url:
        "https://api.github.com/repos/dtrupenn/Tetris/subscription",
      tags_url: "https://api.github.com/repos/dtrupenn/Tetris/tags",
      teams_url: "https://api.github.com/repos/dtrupenn/Tetris/teams",
      trees_url: "https://api.github.com/repos/dtrupenn/Tetris/git/trees{/sha}",
      clone_url: "https://github.com/dtrupenn/Tetris.git",
      mirror_url: "git:git.example.com/dtrupenn/Tetris",
      hooks_url: "https://api.github.com/repos/dtrupenn/Tetris/hooks",
      svn_url: "https://svn.github.com/dtrupenn/Tetris",
      forks: 1,
      open_issues: 1,
      watchers: 1,
      has_issues: true,
      has_projects: true,
      has_pages: true,
      has_wiki: true,
      has_downloads: true,
      archived: true,
      disabled: true,
      visibility: "private",
      license: {
        key: "mit",
        name: "MIT License",
        url: "https://api.github.com/licenses/mit",
        spdx_id: "MIT",
        node_id: "MDc6TGljZW5zZW1pdA==",
        html_url: "https://api.github.com/licenses/mit",
      },
    },
  ]);

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

  return (
    <Container style={{ flex: 1, padding: 15, justifyContent: "center" }}>
      <Row xs={1} md={2}>
        <Col>
          <h2>Repositories</h2>
        </Col>
        <Col>
          <Search setSearch={setSearch} placeHolder="Search for a user" />
        </Col>
      </Row>
      {!results && (
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
          {results.map((el) => (
            <div className="pt-4">
              <Card>
                <Row>
                  <Col>
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
                            <span style={{ paddingLeft: 2 }}>
                              {el.description}
                            </span>
                          </div>
                          <div>
                            <span>
                              Created:{" "}
                              {new Date(el.created_at).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </div>
          ))}
        </Row>
      )}
    </Container>
  );
}

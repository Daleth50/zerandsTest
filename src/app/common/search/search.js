import * as React from "react";
import { Button, Form } from "react-bootstrap";

export default function Search({ setSearch, placeHolder = "Search" }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    setSearch(event.target[0].value);
  };

  return (
    <Form
      className="d-flex"
      onChangeCapture={({ nativeEvent: { target } }) => console.log(target.value)}
      onSubmit={handleSubmit}
    >
      <Form.Control
        autoFocus
        type="search"
        placeholder={placeHolder}
        className="me-2"
        aria-label="search"
        onTouchCancel={() => setSearch("")}
      />
      <Button variant="outline-success" type="submit">
        Search
      </Button>
    </Form>
  );
}

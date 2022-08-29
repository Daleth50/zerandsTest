import * as React from "react";
import { Button, Form } from "react-bootstrap";

export default function Search({ setSearch, placeHolder = "Search" }) {
  const handleSubmit = (value) => {
    if (value) {
      setSearch(value);
    }
  };

  return (
    <Form
      className="d-flex"
      onChangeCapture={({ nativeEvent: { target } }) =>
        handleSubmit(target.value)
      }
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

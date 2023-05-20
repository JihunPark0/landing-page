import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import $ from "jquery";

export default function FormEmail() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [wantUpdate, setWantUpdate] = useState(false);
  const [happy, setHappy] = useState(false);

  function toggleWantUpdate() {
    setWantUpdate(!wantUpdate);
  }
  function toggleHappy() {
    setHappy(!happy);
  }
  const handleSubmit = () => {
    console.log(name);
    console.log(email);
    console.log(happy);
    console.log(wantUpdate);

    $.get(
      "http://localhost/landing-page-backend/addToEmailList.php",
      { name: name, email: email, wantUpdate: wantUpdate, happy: happy },
      () => {
        console.log("email added to list");
      }
    );
  };

  return (
    <div className="py-3">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="John Doe"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="johndoe@gmail.com"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="I'm happy to join the community"
            onChange={(e) => {
              toggleHappy();
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="I'd like to get updates about the findings from the community"
            onChange={(e) => {
              toggleWantUpdate();
            }}
          />
        </Form.Group>
        <Button variant="success" onClick={handleSubmit}>
          Join community
        </Button>
      </Form>
    </div>
  );
}

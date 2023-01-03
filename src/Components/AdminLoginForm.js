import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { handleLogin } from "../Actions/LoginStatus";
import "../css/AdminLoginForm.css";

const AdminLoginForm = () => {
  const [text, setText] = useState({
    username: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleInput = (e) => {
    const { name, value } = e.target;

    setText((text) => {
      return { ...text, [name]: value };
    });
    // console.log(name, value);
  };
  return (
    <div>
      <div
        id="login-box"
        className="container rounded-bottom-4 py-5 px-4 mt-5 bg-white"
      >
        <h1 className="text-center text-primary">QRLise - task 3</h1>
        <p className="text-muted mt-3 text-center mb-5">
          - Enter your credentials to login admin page
        </p>
        <Form id="form-box">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="w-100">Username :</Form.Label>
            <Form.Control
              type="text"
              name="username"
              placeholder="Enter admin username"
              value={text.username}
              onChange={handleInput}
              autoFocus
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="w-100">Password :</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Enter admin password"
              value={text.password}
              onChange={handleInput}
            />
          </Form.Group>

          <Form.Group className="mt-3 h5" style={{textAlign: "right"}} controlId="formBasicPassword">
            <Form.Text className="text-muted ">
              <a
                href="/admin"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Forgot Password?
              </a>
            </Form.Text>
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            className="w-100 mt-3"
            onClick={(e) => {
              e.preventDefault();
              if (text.username.trim() === "" || text.password.trim() === "") {
                alert("Please Enter username and password");
                return;
              }

              if (text.username === "admin" && text.password === "admin") {
                dispatch(handleLogin());
              }
              setText({
                username: "",
                password: "",
              });
            }}
          >
            Login
          </Button>
          <Form.Group className="mt-3 h5" controlId="formBasicPassword">
            <Form.Text className="text-muted">
              Not register? <a href="/admin" onClick={(e) => {
                  e.preventDefault();
                }}>Create account</a>
            </Form.Text>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default AdminLoginForm;

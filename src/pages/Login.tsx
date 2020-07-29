import React, { useState } from "react";
import Container from "../components/Container";
import Button from "../components/Button";
import { Link, Redirect } from "react-router-dom";
import { InputBox, Form, H1, ErrorTag } from "../styles/Css";
import { useSelector, useDispatch } from "react-redux";
import { PHONE_TEST } from "../functionalities/regularExpressions";
import firebase from "firebase";
import { auth_action } from "../Redux/actions/authActions";

const initState = {
  email: "",
  password: ""
};

/**
 * @name Login
 * @description this is a page component for logging in
 */
const Login = () => {
  const [data, setdata] = useState(initState);
  const dispatch = useDispatch();
  const auth = useSelector((state: any) => state.auth);
  const [errorMessage, setErrorMessage] = useState("");

  const SetInputData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setdata({ ...data, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (data.password.trim() !== "" && data.email.trim() !== "") {
      firebase
        .auth()
        .signInWithEmailAndPassword(data.email, data.password)
        .then(response => {
          dispatch(auth_action(response));
        })
        .catch(err => setErrorMessage(err.message));
    }
  };

  if (auth !== null) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <H1>Login</H1>
        {errorMessage && <ErrorTag>{errorMessage}</ErrorTag>}
        <InputBox
          onChange={SetInputData}
          value={data.email}
          type="email"
          id="email"
          placeholder="email: youremail@email.com"
        />
        <InputBox
          onChange={SetInputData}
          type="password"
          id="password"
          value={data.password}
          placeholder="password"
        />
        <Button text="Login" bgcolor="#eaa" />
        <br />
        <Link to="/signup">Create a new account</Link>
      </Form>
    </Container>
  );
};

export default Login;

import React, { useState } from "react";
import firebase from "../Firebase/Firebase";
import { useDispatch } from "react-redux";
import { signout } from "../Redux/actions/authActions";
import { BtnElement } from "../styles/Css";
import InputWithSideLabel from "../components/InputWithSideLabel";

import styled from "styled-components";

const BoxFlex = styled("div")`
  display: flex;
`;

const initInput = {
  username: "",
  password: "",
  validId: ""
};

const Home = () => {
  const dispatch = useDispatch();

  const [inputState, setInputState] = useState(initInput);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(inputState);
  };

  const logout = () => {
    firebase.auth().signOut();
    dispatch(signout());
  };
  return (
    <div>
      <h2>HOME </h2>
      <BtnElement onClick={logout}>sign out</BtnElement>
      <form onSubmit={handleSubmit}>
        <InputWithSideLabel
          state={inputState}
          setState={setInputState}
          label="username"
          placeholder="User name"
          showLabel={true}
        />

        <InputWithSideLabel
          state={inputState}
          setState={setInputState}
          label="password"
          placeholder="Password"
          type="password"
          showLabel={true}
        />

        <InputWithSideLabel
          state={inputState}
          setState={setInputState}
          label="validId"
          placeholder="Valid Id"
          type="file"
          showLabel={true}
        />

        <button>submit</button>
      </form>
    </div>
  );
};

export default Home;

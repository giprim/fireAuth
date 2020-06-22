import React, { useState } from "react";
import firebase from "../Firebase/Firebase";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import Icon from "react-icons-kit";
import { home } from "react-icons-kit/icomoon/home";
import { bitcoin } from "react-icons-kit/fa/bitcoin";
import { diamond } from "react-icons-kit/fa/diamond";

import { signout } from "../Redux/actions/authActions";
import { BtnElement } from "../styles/Css";
import InputWithSideLabel from "../components/InputWithSideLabel";
import StatusBar from "../components/StatusBar";
import ContainerBox from "../components/ContainerBox";
import IconTitleBox from "../components/IconTitleBox";

const BoxFlex = styled("div")`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
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

      <StatusBar status="Deposit" info="Balance: $500,000" />
      <BoxFlex>
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

        <BoxFlex>
          <ContainerBox>
            <IconTitleBox link="/" icon={<Icon icon={home} />} title="Home" />
            <IconTitleBox
              link="/"
              icon={<Icon icon={bitcoin} />}
              title="Deposit"
            />
            <IconTitleBox
              link="/"
              icon={<Icon icon={diamond} />}
              title="Balance"
            />
          </ContainerBox>
        </BoxFlex>
      </BoxFlex>
    </div>
  );
};

export default Home;

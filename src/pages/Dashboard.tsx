import React from "react";
import firebase from "../Firebase/Firebase";
import { useDispatch } from "react-redux";
import { signout } from "../Redux/actions/authActions";
import { BtnElement } from "../styles/Css";
import IconTitleBox from "../components/IconTitleBox";
import Input from "../components/Input";
import ContainerBox from "../components/ContainerBox";

import Icon from "react-icons-kit";
import { profile } from "react-icons-kit/icomoon/profile";
import styled from "styled-components";

const BoxFlex = styled("div")`
  display: flex;
`;

const Home = () => {
  const dispatch = useDispatch();

  const logout = () => {
    firebase.auth().signOut();
    dispatch(signout());
  };
  return (
    <div>
      <h2>HOME </h2>
      <BtnElement onClick={logout}>sign out</BtnElement>
      <BoxFlex>
        <ContainerBox>
          <IconTitleBox
            title="Withdrawal"
            link="/"
            icon={<Icon icon={profile} />}
          />
          <IconTitleBox
            title="Deposit"
            link="/"
            icon={<Icon icon={profile} />}
          />

          <IconTitleBox
            title="Transfer"
            link="/"
            icon={<Icon icon={profile} />}
          />
          <IconTitleBox
            title="Transaction History"
            link="/"
            icon={<Icon icon={profile} />}
          />
          <IconTitleBox
            title="Balance"
            link="/"
            icon={<Icon icon={profile} />}
          />

          <IconTitleBox
            title="Cards and Checks"
            link="/"
            icon={<Icon icon={profile} />}
          />
        </ContainerBox>
      </BoxFlex>
      <Input />
    </div>
  );
};

export default Home;

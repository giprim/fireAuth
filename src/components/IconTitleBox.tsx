import React from "react";
import styled from "styled-components";

const Div = styled("div")`
  display: flex;
  flex-direction: column;
  width: 270px;
  height: 226px;
  background: white;
  text-align: center;
  margin: 10px 5px;

  @media screen and (max-width: 900px) {
    margin: 10px;
  }

  &:hover {
    box-shadow: 3px 3px 15px #4444ff22;
  }

  a {
    margin: auto;
    cursor: pointer;
    text-decoration: none;
  }

  h4 {
    margin-top: 1rem;
    color: #183c8e;
    font-size: 1.5em;
  }

  i svg {
    width: 60px;
    height: auto;
    fill: #183c8e;
  }
`;

interface IIconTitleBox {
  icon: React.ReactNode;
  title: string;
  link: string;
}

const IconTitleBox: React.FC<IIconTitleBox> = ({ icon, title, link }) => {
  return (
    <Div>
      <a href={link}>
        {icon}
        <h4>{title}</h4>
      </a>
    </Div>
  );
};

export default IconTitleBox;

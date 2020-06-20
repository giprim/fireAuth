import React from "react";
import styled from "styled-components";

const Div = styled("div")`
  display: flex;
  flex-direction: column;
  width: 270px;
  height: 226px;
  background: white;
  box-shadow: 3px 3px 10px #eee;
  text-align: center;

  &:hover {
    box-shadow: 3px 3px 15px #4444ff22;
  }

  a {
    margin: auto;
    cursor: pointer;
  }

  h4 {
    margin-top: 1rem;
    color: #44f;
    font-size: 1.5em;
  }

  i svg {
    width: 60px;
    height: auto;
    fill: #44f;
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

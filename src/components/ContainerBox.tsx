import React from "react";
import styled from "styled-components";

const Container = styled("div")`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  justify-content: space-between;
  max-width: 900px;
  padding: 15px;
  background: #183c8e;
`;

const ContainerBox: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default ContainerBox;

import React from "react";
import styled from "styled-components";

const StatusBox = styled("div")`
  background: #c4c4c4;
  color: black;
  display: flex;
  justify-content: space-between;
  padding: 1.2rem;
  font-weight: 500;

  .status {
    color: #183c8e;
    font-size: 1.3rem;
    font-weight: bold;
  }
`;

interface IStatusBar {
  status: string;
  info?: string;
}

const StatusBar: React.FC<IStatusBar> = ({ status, info }) => {
  return (
    <StatusBox>
      <span className="statusTitle">{status}</span>
      <span className="status">{info}</span>
    </StatusBox>
  );
};

export default StatusBar;

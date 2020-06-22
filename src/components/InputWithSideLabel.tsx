import React from "react";
import styled from "styled-components";

const Box = styled("div")`
  display: grid;
  grid-template-columns: ${(props: any) =>
    props.showLabel ? " 210px 3fr" : "1fr"};
  align-content: center;
  margin: 0;

  input {
    display: block;
    width: 100%;
    margin: 4px;
  }
`;

const LabelDiv = styled("div")`
  background: rgba(196, 196, 196, 0.19);
  margin-right: 10px;
  padding: 4px;
  display: flex;

  label {
    margin: auto;
    font-size: 1.2rem;
    text-align: left;
  }
`;

interface IInputLabel {
  state: any;
  setState: Function;
  placeholder?: string;
  label: string;
  showLabel?: boolean;
  type?: "password" | "text" | "date" | "number" | "email" | "tel" | "file";
}

const InputWithSideLabel: React.FC<IInputLabel> = ({
  label,
  state,
  setState,
  placeholder,
  type,
  showLabel
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.id]: event.target.value });
  };

  return (
    <Box showLabel={showLabel}>
      {showLabel && (
        <LabelDiv>
          <label htmlFor={label}>{placeholder}</label>
        </LabelDiv>
      )}
      <input
        id={label}
        placeholder={placeholder}
        value={state[label]}
        onChange={handleChange}
        type={type || "text"}
      />
    </Box>
  );
};

export default InputWithSideLabel;

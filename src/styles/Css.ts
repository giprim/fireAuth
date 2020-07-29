import styled from "styled-components";

export const InputBox = styled("input")`
  padding: 10px 20px;
  border: 1px #999 solid;
  font-size: 17px;
  box-shadow: 1px 1px 4px #eee;
  margin-bottom: 20px;
  width: 100%;
  border-radius: 5px;
`;

export const Form = styled("form")`
  padding: 2em;
  max-width: 370px;
  margin: auto;
  margin-top: 10%;
  box-shadow: 1px 10px 15px #cccccc;
  border: 1px #999999aa;
  border-radius: 7px;
`;

export const LayoutBox = styled("div")`
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 0 auto;
  padding: 2em;
  height: 100%;
  flex-direction: column;
`;

export const H1 = styled("h1")`
  font-size: 3em;
  color: #666;
  margin: 0.3em 0;
`;

export const BtnElement = styled("button")`
  font-size: 1.2em;
  padding: 0.4em 1em;
  display: block;
  width: 100%;
  margin: 10px 0;
  border: 1px #aaa solid;
  border-radius: 5px;
  background: #fff;
  color: #444;

  &:hover {
    background: #eee;
    box-shadow: 3px 5px 15px #aaaaaa4a;
  }
`;

export const ErrorTag = styled("p")`
  color: red;
  padding: 1rem 0.5rem;
`;

import React from 'react';
import styled from 'styled-components';

const InputBox = styled('input')`
	padding: 10px 20px;
	border: 1px #999 solid;
	font-size: 17px;
	box-shadow: 1px 1px 4px #eee;
	margin: 10px;
	width: 100%;
	border-radius: 5px;
`;

interface IInputBox extends React.HTMLAttributes<HTMLInputElement> {}

const InputField: React.FC<IInputBox> = () => {
	return <InputBox />;
};

export default InputField;

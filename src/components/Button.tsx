import React from 'react';
import styled from 'styled-components';

interface IButton extends React.HTMLAttributes<HTMLButtonElement> {
	color?: string;
	bgcolor?: string;
	text: string;
}

const BtnElement = styled('button')`
	font-size: 1.2em;
	padding: 0.4em 1em;
	display: block;
	width: 100%;
	margin-bottom: 20px;
	border: 1px #aaa solid;
	border-radius: 5px;
	background: ${({ bgcolor }: IButton) => (bgcolor ? bgcolor : '#fff')};
	color: ${({ color }: IButton) => (color ? color : '#444')};

	&:hover {
		background: #eee;
		box-shadow: 3px 5px 15px #aaaaaa4a;
	}
`;

const Button: React.FC<IButton> = ({bgcolor, text }) => {
	return <BtnElement bgcolor={bgcolor} text={text}>{text}</BtnElement>;
};

export default Button;

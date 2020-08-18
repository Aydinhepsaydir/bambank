import React from "react";
import styled from "styled-components";
import COLORS from "../../constants/colors";
import mediaQueries from "../../constants/mediaQueries";

const Primary = styled.button`
	border: 0;
	font-family: inherit;
	font-style: inherit;
	font-feature-settings: inherit;
	font-variant: inherit;
	line-height: 1;
	text-transform: none;
	-webkit-appearance: button;
	cursor: pointer;

	width: 150px;
	height: 50px;
	padding: 10px;
	margin: 8px 0;
	font-size: 20px;

	color: ${COLORS.buttonTextColor};
	background-color: ${COLORS.secondary};

	border-radius: 10px;

	@media ${mediaQueries.mobileOnly} {
		width: 100px;
		font-size: 16px;
	}
`;

const Secondary = styled.button`
	border: 0;
	font-family: inherit;
	font-style: inherit;
	font-feature-settings: inherit;
	font-variant: inherit;
	line-height: 1;
	text-transform: none;
	-webkit-appearance: button;
	cursor: pointer;

	width: 150px;
	height: 50px;
	padding: 10px;

	color: ${COLORS.primary};
	background-color: ${COLORS.white};

	border: 3px solid ${COLORS.secondary};
	border-radius: 10px;
`;

const Button = (props) => {
	const { primary, secondary } = props;

	if (primary) {
		return <Primary {...props}>{props.children}</Primary>;
	} else if (secondary) {
		return <Secondary {...props}>{props.children}</Secondary>;
	}
	return <button {...props}>SET TYPE</button>;
};

export default Button;

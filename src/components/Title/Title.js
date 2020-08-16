import React from "react";
import styled from "styled-components";
import COLORS from "../../constants/colors";

const StyledH1 = styled.h1`
	padding: ${(props) => props.padding || "24px 0 0 0"};
	margin: ${(props) => props.margin || "32px 0"};
	font-size: 50px;
	color: ${(props) => props.color || COLORS.primary};
`;

const StyledH2 = styled.h2`
	padding: ${(props) => props.padding || "20px 0 0 0"};
	margin: ${(props) => props.margin || "28px 0"};
	font-size: 28px;
	color: ${(props) => props.color || COLORS.primary};
`;

const Title = (props) => {
	const { type } = props;

	switch (type) {
		case "h1":
			return <StyledH1 {...props}>{props.children}</StyledH1>;
		case "h2":
			return <StyledH2 {...props}>{props.children}</StyledH2>;
		default:
			return console.warn(
				"Title component used without type tag. Please provide H value"
			);
	}
};

export default Title;

import React from "react";
import styled from "styled-components";
import COLORS from "../../constants/colors";

const StyledParagraph = styled.p`
	margin: 8px 0px;
	font-weight: ${(props) => props.fontWeight || "300"};
	font-size: ${(props) => props.fontSize || "24px"};
	color: ${(props) => props.color || COLORS.primary};
	width: ${(props) => props.width || "auto"};
`;

const Paragraph = (props) => {
	return (
		<>
			<StyledParagraph {...props}>{props.children}</StyledParagraph>
		</>
	);
};

export default Paragraph;

import styled from "styled-components";
import COLORS from "../../constants/colors";
import mediaQueries from "../../constants/mediaQueries";

export const Section = styled.div`
	width: 100%;
	height: 500px;
	background-color: ${(props) => props.backgroundColor || COLORS.tertiary};

	display: flex;
	justify-content: space-evenly;
	align-items: center;
`;

export const TextWrapper = styled.div``;

export const StyledImage = styled.img`
	width: 400px;
`;

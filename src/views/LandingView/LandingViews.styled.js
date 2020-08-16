import styled from "styled-components";
import COLORS from "../../constants/colors";

export const Section = styled.div`
	width: 100%;
	height: 500px;
	background-color: ${(props) => props.backgroundColor || COLORS.tertiary};

	display: flex;
	justify-content: space-evenly;
	align-items: center;
`;

export const TextWrapper = styled.div``;

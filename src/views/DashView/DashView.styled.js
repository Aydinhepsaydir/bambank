import styled from "styled-components";
import COLORS from "../../constants/colors";

export const Box = styled.div`
	max-width: 600px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: ${COLORS.backgroundColor};
	border-radius: 10px;
	padding: 32px;
	padding-top: 0;

	-webkit-box-shadow: 0px 0px 20px 10px rgba(217, 217, 217, 1);
	-moz-box-shadow: 0px 0px 20px 10px rgba(217, 217, 217, 1);
	box-shadow: 0px 0px 20px 10px rgba(217, 217, 217, 1);

	transition: 0.5s opacity;

	&:hover {
		cursor: pointer;
		opacity: 0.7;
	}
`;

export const FuncWrapper = styled.div`
	display: flex;
	justify-content: space-evenly;
`;

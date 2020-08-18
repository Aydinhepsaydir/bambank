import styled from "styled-components";
import COLORS from "../../constants/colors";

export const Box = styled.div`
	width: 400px;
	min-height: 400px;
	max-height: 400px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	background-color: ${COLORS.backgroundColor};
	border-radius: 10px;
	padding: 32px;
	overflow-y: auto;

	-webkit-box-shadow: 0px 0px 20px 10px rgba(217, 217, 217, 1);
	-moz-box-shadow: 0px 0px 20px 10px rgba(217, 217, 217, 1);
	box-shadow: 0px 0px 20px 10px rgba(217, 217, 217, 1);
`;

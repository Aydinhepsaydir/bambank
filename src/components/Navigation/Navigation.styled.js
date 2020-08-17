import styled from "styled-components";
import COLORS from "../../constants/colors";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
	text-decoration: none;
	font-size: 20px;
	color: ${COLORS.darkPurple};
	margin: 0 12px;
	font-weight: 700;
`;

export const MenuWrapper = styled.div`
	width: 100%;
	height: 70px;
	text-align: right;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: ${COLORS.primary};

	-webkit-box-shadow: 0px 0px 20px 10px rgba(217, 217, 217, 1);
	-moz-box-shadow: 0px 0px 20px 10px rgba(217, 217, 217, 1);
	box-shadow: 0px 0px 20px 10px rgba(217, 217, 217, 1);
`;

import styled from "styled-components";
import COLORS from "../../constants/colors";

export const PageWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
`;

export const BalanceWrapper = styled.div`
	width: 80%;
	height: 600px;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	border: 3px solid ${COLORS.tertiary};
	border-radius: 10px;
`;

export const MyTransactionsWrapper = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: flex-start;
	margin-bottom: 50px;
`;

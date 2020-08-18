import styled from "styled-components";
import COLORS from "../../constants/colors";
import mediaQueries from "../../constants/mediaQueries";

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

	@media ${mediaQueries.tabletLandscapeDown} {
		height: 300px;
		p {
			font-size: 50px;
		}
	}
`;

export const MyTransactionsWrapper = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: flex-start;
	margin-bottom: 50px;
	width: 100%;

	@media ${mediaQueries.tabletLandscapeDown} {
		flex-direction: column;
		align-items: center;
	}
`;

export const StyledImage = styled.img`
	width: 400px;
	margin: 25px 0;

	@media ${mediaQueries.tabletLandscapeDown} {
		width: 350px;
	}

	@media ${mediaQueries.mobileOnly} {
		width: 300px;
	}
`;

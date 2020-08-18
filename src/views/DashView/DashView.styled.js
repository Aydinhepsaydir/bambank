import styled from "styled-components";
import COLORS from "../../constants/colors";
import mediaQueries from "../../constants/mediaQueries";

export const Box = styled.div`
	max-width: 600px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: ${COLORS.backgroundColor};
	border-radius: 10px;
	padding: 32px;
	margin: 8px;
	padding-top: 0;

	-webkit-box-shadow: 0px 0px 20px 10px rgba(217, 217, 217, 1);
	-moz-box-shadow: 0px 0px 20px 10px rgba(217, 217, 217, 1);
	box-shadow: 0px 0px 20px 10px rgba(217, 217, 217, 1);

	transition: 0.5s opacity;

	&:hover {
		cursor: pointer;
		opacity: 0.7;
	}

	@media ${mediaQueries.bigDesktopDown} {
		max-width: 400px;
	}
`;

export const FuncWrapper = styled.div`
	display: flex;
	justify-content: space-evenly;

	@media ${mediaQueries.tabletLandscapeDown} {
		flex-direction: column;
		align-items: center;
	}
`;

export const TransactionListContainer = styled.div`
	width: 100%;
	margin: 60px 0;
	display: flex;
	justify-content: center;
`;

export const StyledImage = styled.img`
	width: 100%;
`;

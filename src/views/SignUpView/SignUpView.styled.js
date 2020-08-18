import styled from "styled-components";
import mediaQueries from "../../constants/mediaQueries";

export const SignUpWrapper = styled.div`
	width: 100%;
	height: 100%;

	@media ${mediaQueries.tabletPortraitUp} {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	@media ${mediaQueries.tabletLandscapeUp} {
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;
	}
`;

export const FuncWrapper = styled.div`
	@media ${mediaQueries.tabletPortraitUp} {
		display: flex;
		flex-direction: column;
	}
`;

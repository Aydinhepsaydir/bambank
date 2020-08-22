import styled from "styled-components";
import { mediaQueries } from "../../constants";

export const ForgetPasswordWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media ${mediaQueries.tabletLandscapeDown} {
    flex-direction: column;
  }
`;

export const FuncWrapper = styled.div`
  @media ${mediaQueries.mobileOnly} {
    width: 90%;
  }
`;

export const StyledImage = styled.img`
  position: relative;
  width: 500px;
  margin-top: 150px;

  @media ${mediaQueries.tabletLandscapeDown} {
    width: 500px;
  }

  @media ${mediaQueries.mobileOnly} {
    width: 40vh;
  }
`;

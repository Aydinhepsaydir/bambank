import styled from "styled-components";
import { COLORS } from "../../constants";
import { mediaQueries } from "../../constants";

export const Section = styled.div`
  width: 100%;
  height: 500px;
  padding: 0 8px;
  box-sizing: border-box;
  background-color: ${(props) => props.backgroundColor || COLORS.tertiary};

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media ${mediaQueries.tabletLandscapeDown} {
    flex-direction: column;
    height: fit-content;
    padding-bottom: 32px;
  }
`;

export const TextWrapper = styled.div`
  max-width: 600px;
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

import styled from "styled-components";
import { COLORS } from "../../constants";
import { Link } from "react-router-dom";
import { Title } from "../../components";
import { mediaQueries } from "../../constants";

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  margin: 0 12px;
  font-weight: 700;

  @media ${mediaQueries.tabletLandscapeDown} {
    p {
      font-size: 16px;
      padding: 0;
      margin: 0 8px;
    }
    margin: 0;
  }
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

  padding: 0 12px;
  box-sizing: border-box;
`;

export const StyledTitle = styled(Title)`
  border-right: 3px solid white;
  color: ${COLORS.white};
  margin: 0;
  padding: 0;
  padding-right: 24px;

  @media ${mediaQueries.tabletLandscapeDown} {
    font-size: 24px;
    padding-right: 8px;
    margin-right: 8px;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
`;

import styled from "styled-components";
import { mediaQueries } from "../../constants";
import { COLORS } from "../../constants";

const Input = styled.input`
  padding: 12px 20px;
  border: 1px solid ${(props) => props.borderColor || COLORS.secondary};
  margin: 4px 0;
  border-radius: 5px;

  &:focus {
    border: 2px solid ${(props) => props.borderColor || COLORS.secondary};
  }

  @media ${mediaQueries.tabletPortraitUp} {
    width: 300px;
    max-width: 300px;
  }
`;

export default Input;

import styled from "styled-components";
import { ReactComponent as SendMoneySvg } from "../../assets/graphics/send_money.svg";

export const SendMoneyWrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
`;

export const FuncWrapper = styled.div``;

export const StyledSvg = styled(SendMoneySvg)`
	height: 400px;
`;

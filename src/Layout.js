import React from "react";
import { Helmet } from "react-helmet";
import App from "./App";
import styled from "styled-components";
import Navigation from "./components/Navigation/Navigation";
import { withAuthentication } from "./contexts/Session";

const Main = styled.main`
	width: 100%;
	height: 100%;
`;

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Container = styled.div`
	height: calc(100vh - 70px);
	width: 100%;
`;

const Layout = () => {
	const title = "Bambank";
	return (
		<Container>
			<Helmet>
				<title>{title}</title>
			</Helmet>
			<Navigation />
			<Wrapper>
				<Main>
					<App />
				</Main>
			</Wrapper>
		</Container>
	);
};

export default withAuthentication(Layout);

import React from "react";
import { Helmet } from "react-helmet";
import App from "./App";
import styled from "styled-components";
import Navigation from "./components/Navigation/Navigation";
import { withAuthentication } from "./contexts/Session";

const Container = styled.div`
	height: calc(100vh - 70px);
`;

const Main = styled.main`
	height: 100%;
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
			<Main>
				<App />
			</Main>
		</Container>
	);
};

export default withAuthentication(Layout);

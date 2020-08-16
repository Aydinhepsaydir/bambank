import React from "react";

const AmplifyContext = React.createContext(null);

export const withAmplify = (Component) => (props) => (
	<AmplifyContext.Consumer>
		{(amplify) => <Component {...props} amplify={amplify} />}
	</AmplifyContext.Consumer>
);

export default AmplifyContext;

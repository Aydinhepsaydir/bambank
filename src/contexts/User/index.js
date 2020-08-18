import React from "react";
import UserProvider, { withUser, UserContext } from "./context";

const User = () => (
	<div>
		<h1>User</h1>
	</div>
);

export default User;

//context
export { UserContext, withUser, UserProvider };

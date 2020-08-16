import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import styled from "styled-components";
import { withFirebase, firebase } from "../../contexts/Firebase";
import * as ROUTES from "../../constants/routes";
import { Paragraph, Input, Button } from "../../components";
import COLORS from "../../constants/colors";

const INITIAL_STATE = {
	email: "",
	password: "",
	error: null,
};

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

class SignInFormBase extends Component {
	constructor(props) {
		super(props);
		this.state = { ...INITIAL_STATE };
	}

	onSubmit = (event) => {};

	onChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	render() {
		const { email, password, error } = this.state;

		const isInvalid = password === "" || email === "";

		return (
			<StyledForm onSubmit={this.onSubmit}>
				<Input
					name="email"
					value={email}
					onChange={this.onChange}
					type="text"
					placeholder="Email Address"
					borderColor={COLORS.darkGreen}
				/>
				<Input
					name="password"
					value={password}
					onChange={this.onChange}
					type="password"
					placeholder="Password"
					borderColor={COLORS.darkGreen}
				/>

				{this.state.error && (
					<Paragraph color="red" copy={error} fontSize="16px" />
				)}

				<Button disabled={isInvalid} primary>
					Sign in
				</Button>
			</StyledForm>
		);
	}
}

const SignInForm = compose(withRouter, withFirebase)(SignInFormBase);

export default SignInForm;

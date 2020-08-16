import React, { Component } from "react";
import { withFirebase, firebase } from "../../contexts/Firebase";
import * as ROUTES from "../../constants/routes";
import { compose } from "recompose";
import { withRouter } from "react-router-dom";
import { Input, Button } from "../../components";
import styled from "styled-components";
import COLORS from "../../constants/colors";

const INITIAL_STATE = {
	username: "",
	email: "",
	passwordOne: "",
	passwordTwo: "",
	error: null,
};

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

class SignUpFormBase extends Component {
	constructor(props) {
		super(props);

		this.state = { ...INITIAL_STATE };
	}

	onSubmit = (event) => {
		event.preventDefault();
	};

	onChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	render() {
		const isInvalid =
			this.passwordOne !== this.passwordTwo ||
			this.passwordOne === "" ||
			this.email === "" ||
			this.username === "";

		return (
			<StyledForm onSubmit={this.onSubmit}>
				<Input
					name="username"
					value={this.username}
					onChange={this.onChange}
					type="text"
					placeholder="Full Name"
					borderColor={COLORS.darkYellow}
				/>
				<Input
					name="email"
					value={this.email}
					onChange={this.onChange}
					type="text"
					placeholder="Email Address"
					borderColor={COLORS.darkYellow}
				/>
				<Input
					name="passwordOne"
					value={this.passwordOne}
					onChange={this.onChange}
					type="password"
					placeholder="Password"
					borderColor={COLORS.darkYellow}
				/>
				<Input
					name="passwordTwo"
					value={this.passwordTwo}
					onChange={this.onChange}
					type="password"
					placeholder="Confirm Password"
					borderColor={COLORS.darkYellow}
				/>
				<Button primary disabled={isInvalid}>
					Sign up
				</Button>
				{this.state.error && <p>{this.state.error}</p>}
			</StyledForm>
		);
	}
}

const SignUpForm = compose(withRouter, withFirebase)(SignUpFormBase);

export default SignUpForm;

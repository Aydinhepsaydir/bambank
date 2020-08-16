import React, { Component } from "react";
import { withFirebase } from "../../contexts/Firebase";
import { Input, Button, Paragraph } from "../../components";
import styled from "styled-components";
import COLORS from "../../constants/colors";

const INITIAL_STATE = {
	email: "",
	error: null,
};

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

class PasswordForgetFormBase extends Component {
	constructor(props) {
		super(props);
		this.state = { ...INITIAL_STATE };
	}

	onSubmit = (event) => {};

	onChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	render() {
		const { email, error } = this.state;
		const isInvalid = email === "";

		return (
			<StyledForm onSubmit={this.onSubmit}>
				<Input
					name="email"
					value={this.state.email}
					onChange={this.onChange}
					type="text"
					placeholder="Email Address"
					borderColor={COLORS.darkPurple}
					width="300px"
				/>
				{error && <Paragraph color="red" copy={error.message} />}
				<Button disabled={isInvalid} primary>
					Reset
				</Button>
			</StyledForm>
		);
	}
}

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export default PasswordForgetForm;

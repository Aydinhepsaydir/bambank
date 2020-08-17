import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import styled from "styled-components";
import { withAmplify } from "../../contexts/Amplify";

import * as ROUTES from "../../constants/routes";
import { ConfirmAccountView } from "../../views";
import { Paragraph, Input, Button, Title } from "../../components";
import { PasswordForgetLink } from "../PasswordForgetView";
import { SignUpLink } from "../SignUpView";

import { useForm } from "react-hook-form";

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

const SignInFormBase = ({ amplify, history }) => {
	const { handleSubmit, register, errors } = useForm();

	const [confirmAccount, setConfirmAccount] = useState(false);

	const onSubmit = async (values) => {
		await amplify
			.doSignIn(values.email, values.password)
			.then((data) => {
				if (data.error) {
					alert(data.error.message);
					if (data.error.name === "UserNotConfirmedException") {
						setConfirmAccount(true);
						amplify.resendConfirmationCode(values.email);
						renderConfirmationForm(values.email, values.password);
					}
				} else {
					console.log("successful sign in: ", data);
					history.push(ROUTES.DASHBOARD);
				}
			})
			.catch((e) => console.log(e));
	};

	const signInForm = () => {
		return (
			<>
				<Title type="h1">Sign In</Title>
				<StyledForm onSubmit={handleSubmit(onSubmit)}>
					<Input
						type="text"
						name="email"
						placeholder="Email Address"
						width="300px"
						ref={register({
							required: "This field is required",
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: "Invalid email address",
							},
						})}
					/>
					{errors.email && (
						<Paragraph fontSize="16px" color="red" fontWeight="700">
							{errors.email.message}
						</Paragraph>
					)}

					<Input
						type="password"
						name="password"
						placeholder="Password"
						ref={register({
							required: "This field is required",
							minLength: {
								value: 8,
								message: "Password must be longer than 8 characters.",
							},
						})}
					/>
					{errors.password && (
						<Paragraph fontSize="16px" color="red" fontWeight="700">
							{errors.password.message}
						</Paragraph>
					)}

					<Button type="submit" primary>
						Sign In
					</Button>
				</StyledForm>
				<PasswordForgetLink />
				<SignUpLink />
			</>
		);
	};

	const renderConfirmationForm = (email, password) => {
		return <ConfirmAccountView username={email} password={password} />;
	};

	return <>{confirmAccount ? renderConfirmationForm() : signInForm()}</>;
};

const SignInForm = compose(withRouter, withAmplify)(SignInFormBase);

export default SignInForm;

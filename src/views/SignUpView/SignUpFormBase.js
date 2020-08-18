import React, { useState } from "react";
import { withAmplify } from "../../contexts/Amplify";
import { withFirebase } from "../../contexts/Firebase";
import * as ROUTES from "../../constants/routes";
import { compose } from "recompose";
import { withRouter, Link } from "react-router-dom";
import { Input, Button, Paragraph, Title } from "../../components";
import styled from "styled-components";
import COLORS from "../../constants/colors";

import { useForm } from "react-hook-form";
import { ConfirmAccountView } from "../../views";

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 500px;
`;

const SignUpFormBase = ({ amplify, firebase }) => {
	const { handleSubmit, register, errors, watch } = useForm({
		defaultValues: {
			name: "",
			email: "",
			password: "",
			confirmPassword: "",
			code: "",
		},
	});

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");

	const [codeSent, setCodeSent] = useState(false);
	const [confirmed, setConfirmed] = useState(false);
	const [isSendingCode, setIsSendingCode] = useState(false);

	const handleSendCodeClick = async (values) => {
		setIsSendingCode(true);

		await amplify
			.doSignUp(values.email, values.password, values.name)
			.then((user) => {
				console.log("user: ", user);
				setCodeSent(true);
				setEmail(values.email);
				setPassword(values.password);
				setName(values.name);
			})
			.catch((error) => {
				console.log("error: ", error);
				setIsSendingCode(false);
				setCodeSent(false);
			});
	};

	const renderRequestCodeForm = () => {
		return (
			<>
				<Title type="h1">Create an account</Title>
				<StyledForm onSubmit={handleSubmit(handleSendCodeClick)}>
					<Paragraph fontSize="16px">It's quick and easy.</Paragraph>
					<Input
						type="text"
						name="name"
						placeholder="Full name"
						width="300px"
						ref={register({
							required: "This field is required",
							pattern: {
								value: /^[A-Za-z\s\-]+$/,
								message: "Please enter your real name",
							},
						})}
					/>
					{errors.name && (
						<Paragraph fontSize="16px" color="red" fontWeight="700">
							{errors.name.message}
						</Paragraph>
					)}

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

					<Input
						type="password"
						name="confirmPassword"
						placeholder="Confirm Password"
						ref={register({
							required: "This field is required",
							validate: (value) => {
								const password = watch("password");
								return value === password || "The passwords do not match";
							},
							minLength: {
								value: 8,
								message: "Password must be longer than 8 characters.",
							},
						})}
					/>
					{errors.confirmPassword && (
						<Paragraph fontSize="16px" color="red" fontWeight="700">
							{errors.confirmPassword.message}
						</Paragraph>
					)}

					<Button type="submit" primary disabled={isSendingCode}>
						Sign Up
					</Button>
				</StyledForm>
			</>
		);
	};

	const renderConfirmationForm = () => {
		return <ConfirmAccountView name={name} email={email} password={password} />;
	};

	const renderSuccessMessage = () => {
		return (
			<>
				<Paragraph>Your account has been confirmed.</Paragraph>
				<Link to="/signin">Click here to login.</Link>
			</>
		);
	};

	return (
		<>
			{!codeSent
				? renderRequestCodeForm()
				: !confirmed
				? renderConfirmationForm()
				: renderSuccessMessage()}
		</>
	);
};

const SignUpForm = compose(
	withRouter,
	withAmplify,
	withFirebase
)(SignUpFormBase);

export default SignUpForm;

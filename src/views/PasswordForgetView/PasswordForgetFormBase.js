import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import { withAmplify } from "../../contexts/Amplify";
import { Input, Button, Paragraph } from "../../components";
import styled from "styled-components";
import COLORS from "../../constants/colors";

import { useForm } from "react-hook-form";

import amplify from "../../contexts/Amplify";
import { Auth } from "aws-amplify";

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

const ResetPassword = ({ amplify }) => {
	const { handleSubmit, register, watch, errors, reset } = useForm();

	console.log("errors", errors);

	const [codeSent, setCodeSent] = useState(false);
	const [confirmed, setConfirmed] = useState(false);
	const [isConfirming, setIsConfirming] = useState(false);
	const [isSendingCode, setIsSendingCode] = useState(false);

	const validateCodeForm = () => {
		const code = watch("code");
		return code.length > 0;
	};

	const validateResetForm = () => {
		const fields = watch(["code", "password", "confirmPassword"]);
		console.log("fields: ", fields);

		return (
			fields.code.length > 0 &&
			fields.password.length > 0 &&
			fields.password === fields.confirmPassword
		);
	};

	const handleSendCodeClick = async (values) => {
		console.log(values);

		setIsSendingCode(true);

		await amplify
			.doForgotPassword(values.email)
			.then((data) => {
				console.log(data);
				setCodeSent(true);
				reset();
			})
			.catch((error) => {
				console.log("error: ", error);
				setIsSendingCode(false);
				setCodeSent(false);
			});
	};

	const handleConfirmClick = async (values) => {
		console.log(values);

		setIsConfirming(true);

		await amplify
			.doForgetPasswordSubmit(values.email, values.code, values.password)
			.then(() => {
				setConfirmed(true);
				reset();
			})
			.catch((e) => {
				console.log("error: ", e);
				setIsConfirming(false);
				setConfirmed(false);
			});
	};

	const renderRequestCodeForm = () => {
		return (
			<StyledForm onSubmit={handleSubmit(handleSendCodeClick)}>
				<Input
					type="text"
					name="email"
					placeholder="Email Address"
					width="300px"
					ref={register({
						required: "This field is required",
						pattern: {
							value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
							message: "invalid email address",
						},
					})}
				/>
				{errors.email && (
					<Paragraph fontSize="16px" color="red" fontWeight="700">
						{errors.email.message}
					</Paragraph>
				)}

				<Button type="submit" primary>
					Reset
				</Button>
			</StyledForm>
		);
	};

	const renderConfirmationForm = () => {
		const fields = watch();

		return (
			<StyledForm onSubmit={handleSubmit(handleConfirmClick)}>
				<Input
					type="text"
					name="code"
					placeholder="Confirmation code"
					ref={register({
						required: "This field is required",
						minLength: {
							value: 1,
							message: "Please enter a valid code.",
						},
					})}
				/>
				{errors.code && (
					<Paragraph fontSize="16px" color="red" fontWeight="700">
						{errors.code.message}
					</Paragraph>
				)}

				<Paragraph>
					Please check your email ({fields.email}) for the confirmation code.
				</Paragraph>

				<Input
					type="password"
					name="password"
					placeholder="Password"
					ref={register({
						required: "This field is required",
						minLength: {
							value: 6,
							message: "Password must be longer than 6 characters.",
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
						minLength: {
							value: 6,
							message: "Password must be longer than 6 characters.",
						},
					})}
				/>

				{errors.confirmPassword && (
					<Paragraph fontSize="16px" color="red" fontWeight="700">
						{errors.confirmPassword.message}
					</Paragraph>
				)}

				<Button type="submit" primary>
					Reset
				</Button>
			</StyledForm>
		);
	};

	const renderSuccessMessage = () => {
		return (
			<>
				<Paragraph>Your password has been reset.</Paragraph>
				<Link to="/signin">Click here to login with your new credentials.</Link>
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

export default withAmplify(ResetPassword);

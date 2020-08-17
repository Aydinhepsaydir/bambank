import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import * as ROUTES from "../../constants/routes";

import { compose } from "recompose";
import { withRouter } from "react-router-dom";
import { withAmplify } from "../../contexts/Amplify";

import { Paragraph, Input, Button, Title } from "../../components";

const ConfirmAccountWrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	max-width: 500px;
`;

const ConfirmAccount = ({ username, password, amplify, history }) => {
	const { handleSubmit, register, errors, watch } = useForm({
		defaultValues: {
			code: "",
		},
	});

	const [confirmed, setConfirmed] = useState(false);
	const [isConfirming, setIsConfirming] = useState(false);

	const handleConfirmClick = async (values) => {
		setIsConfirming(true);
		console.log(values);

		await amplify
			.doConfirmSignUp(username, values.code)
			.then((data) => {
				if (data?.error) {
					alert(data.error.message);
				} else {
					setConfirmed(true);
					amplify.doSignIn(username, password);
					history.push(ROUTES.DASHBOARD);
				}
			})
			.catch((e) => {
				console.log("error: ", e);
				setIsConfirming(false);
				setConfirmed(false);
			});
	};

	return (
		<ConfirmAccountWrapper>
			<StyledForm onSubmit={handleSubmit(handleConfirmClick)}>
				<Title type="h1">Confirm your account</Title>
				<Paragraph>
					Please check your email for the confirmation code.
				</Paragraph>
				<Input
					type="tel"
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

				<Button type="submit" primary disabled={isConfirming}>
					Submit
				</Button>
			</StyledForm>
		</ConfirmAccountWrapper>
	);
};

export default compose(withRouter, withAmplify)(ConfirmAccount);

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as ROUTES from "../../constants/routes";

import { compose } from "recompose";
import { withRouter } from "react-router-dom";
import { withAmplify } from "../../contexts/Amplify";
import { withFirebase } from "../../contexts/Firebase";
import { withAuthentication } from "../../contexts/Session";

import { Paragraph, Input, Button, Title } from "../../components";
import { ConfirmAccountWrapper, StyledForm } from "./ConfirmAccountView.styled";

const ConfirmAccount = ({
	name,
	email,
	password,
	amplify,
	history,
	firebase,
	authState,
}) => {
	//authenticated users sent to dash
	if (authState === "signedIn") {
		history.push(ROUTES.DASHBOARD);
	}

	const { handleSubmit, register, errors, watch } = useForm({
		defaultValues: {
			code: "",
		},
	});

	console.log("firebase", firebase);

	const [confirmed, setConfirmed] = useState(false);
	const [isConfirming, setIsConfirming] = useState(false);

	const handleConfirmClick = async (values) => {
		setIsConfirming(true);

		await amplify
			.doConfirmSignUp(email, values.code)
			.then((data) => {
				if (data?.error) {
					alert(data.error.message);
				} else {
					setConfirmed(true);
					//sign user in after verification
					amplify.doSignIn(email, password).then(async (data) => {
						//add user details to firebase
						await firebase.createUser(data.username, name, email);
						history.push(ROUTES.DASHBOARD);
					});
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

export default compose(
	withFirebase,
	withRouter,
	withAmplify,
	withAuthentication
)(ConfirmAccount);

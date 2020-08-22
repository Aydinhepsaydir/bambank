import React from "react";
import { Hub } from "aws-amplify";
import moment from "moment";
import styled from "styled-components";

import { compose } from "recompose";
import { withFirebase } from "../../contexts/Firebase";
import { withRouter } from "react-router-dom";
import * as ROUTES from "../../constants";

import { Paragraph, Input, Button, Title } from "../../components";

import { useForm } from "react-hook-form";
import { withUser } from "../../contexts/User";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const SendMoneyForm = ({ amplify, history, firebase, user }) => {
  const { handleSubmit, register, errors } = useForm();

  const updatedInfo = (amount, name, type, balance, transactions, message) => {
    return {
      transactions: [
        ...transactions,
        {
          date: moment().format("MMM Do"),
          amount: amount,
          who: name,
          transactionType: type,
          message: message,
        },
      ],
      //calculate new balance
      balance: type === "R" ? balance + amount : balance - amount,
    };
  };

  const onSubmit = async (values) => {
    if (values.email === user.email) {
      alert("You can't send money to yourself!");
      return;
    }

    // get user from inputted email
    const snapshot = await firebase
      .getUsers()
      .where("email", "==", values.email)
      .get();

    if (snapshot.empty) {
      alert("That person does not use Bambank... yet!");
    } else {
      snapshot.forEach(async (doc) => {
        const { transactions, balance } = doc.data();
        //update recipient with new info
        await firebase.updateUser(
          doc.data().uid,
          updatedInfo(
            parseInt(values.amount),
            user.name,
            "R", // R for received
            balance,
            transactions,
            values.message
          )
        );
      });

      //update the logged in user
      const currentUserRef = await firebase.getUser(user.uid).get();
      if (!currentUserRef.exists) {
        console.log("User does not exist!");
      } else {
        const { balance, transactions } = currentUserRef.data();
        await firebase
          .updateUser(
            user.uid,
            updatedInfo(
              parseInt(values.amount),
              values.email,
              "S", // S for Sent
              balance,
              transactions,
              values.message
            )
          )
          .then(() => history.push(ROUTES.DASHBOARD));
      }
    }

    //let context know to refresh the local user object
    Hub.dispatch("transactions", {
      event: "money sent",
    });
  };

  return (
    <>
      <Title type="h1">Send Money</Title>
      <Paragraph fontSize="16px">Who are you sending money to?</Paragraph>
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

        <Paragraph fontSize="16px">How much are you sending?</Paragraph>
        <Input
          type="number"
          name="amount"
          placeholder="Amount"
          ref={register({
            required: "This field is required",
            pattern: {
              value: /^[1-9]+[0-9]*$/,
              message: "Must be a positive number.",
            },
          })}
        />
        {errors.amount && (
          <Paragraph fontSize="16px" color="red" fontWeight="700">
            {errors.amount.message}
          </Paragraph>
        )}

        <Paragraph fontSize="16px">
          What are you sending them money for?
        </Paragraph>
        <Input
          type="text"
          name="message"
          placeholder="Message"
          ref={register({
            maxLength: 50,
          })}
        />
        {errors.message?.type === "maxLength" && (
          <Paragraph fontSize="16px" color="red" fontWeight="700">
            Your message is too long. (30 characters max.)
          </Paragraph>
        )}

        <Button type="submit" primary>
          Send
        </Button>
      </StyledForm>
    </>
  );
};

export default compose(withRouter, withUser, withFirebase)(SendMoneyForm);

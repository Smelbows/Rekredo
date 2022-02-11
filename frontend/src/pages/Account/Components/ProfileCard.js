import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { AccountPageContainer } from 'styledElements/Card';
import { Button } from '../../../styledElements/Buttons';
import { H4 } from 'styledElements/Texts';
import { Label, StyledInput, TextArea } from 'styledElements/Form';
import styled from 'styled-components';

const GridForm = styled.form`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  width: 100%;

  /* & > button {
    grid-row: 5/6;
  }
  & > textarea {
    grid-row: 4/5;
    grid-column: 1/3;
  } */
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;

    & > button {
      grid-row: 5/6;
    }
    & > textarea {
      grid-row: 4/5;
      grid-column: 1/3;
    }
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ProfileCard = () => {
  const user = useSelector((state) => state.user);
  const [username, setUsername] = useState([user.username]);
  const [email, setEmail] = useState([user.email]);
  const [accountType, setAccountType] = useState([user.accountType]);
  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');

  console.log(user);
  return (
    <>
      <H4 shadow="0 2px 2px black" backGroundColor="var(--wintergreen)">
        Account Settings
      </H4>
      <AccountPageContainer>
        <GridForm>
          <Label bottom="0" padding="0px" textAlign="left">
            First name
            <StyledInput
              margin="10px 0"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Label>
          <Label bottom="0" padding="0px" textAlign="left">
            Surname
            <StyledInput
              margin="10px 0"
              type="text"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
          </Label>
          <Label bottom="0" padding="0px" textAlign="left">
            Username
            <StyledInput
              margin="10px 0"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Label>
          <Label bottom="0" padding="0px" textAlign="left">
            Email
            <StyledInput
              margin="10px 0"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Label>
          <Label bottom="0" padding="0px" textAlign="left">
            Account type
            <StyledInput
              margin="10px 0"
              type="text"
              value={accountType}
              onChange={(e) => setAccountType(e.target.value)}
            />
          </Label>
          <TextArea margin="0" placeholder="Add a bio" />
          <Button propBtnColor="var(--white)" background="var(--wintergreen)">
            Update
          </Button>
          <Button propBtnColor="var(--white)" background="var(--wintergreen)">
            Delete my account
          </Button>
        </GridForm>
      </AccountPageContainer>
    </>
  );
};

export default ProfileCard;

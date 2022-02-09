import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StyledProfileCard } from 'styledElements/Card';
import { Button } from '../../../styledElements/Buttons';
import { H4, P } from 'styledElements/Texts';
import { Form, Label, StyledInput } from 'styledElements/Form';
import styled from 'styled-components';

const Account = styled.div`
  width: 100%;
`;

const GridForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  
`;

const ProfileCard = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const [name, setName] = useState([user.username]);
  const [email, setEmail] = useState([user.email]);


  console.log(user);
  return (
    <Account>
      <H4 padding="none" color="var(--black)">
        Account Settings
      </H4>
      <GridForm>
        <Label>
          Username
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Label>
        <Label>
          Email
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Label>
        <div>
          <P>Hello {user.username}</P>
          <Button propBtnColor="var(--black)">Edit username</Button>
        </div>
        <div>
          <P>Account type: {user.accountType}</P>
          <Button propBtnColor="var(--black)">Edit account type</Button>
        </div>
        <div>
          <P>Email: {user.email}</P>
          <Button propBtnColor="var(--black)">Edit email</Button>
        </div>
        <Button propBtnColor="var(--black)">Delete account</Button>
        <Button
          propBtnColor="var(--black)"
          onClick={() => navigate('/contact')}
        >
          need help? click here
        </Button>
      </GridForm>
    </Account>
  );
};

export default ProfileCard;

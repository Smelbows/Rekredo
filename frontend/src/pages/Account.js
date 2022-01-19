import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

import { Button, PropButton } from '../components/Buttons';

const ProfileCard = styled.div`
  display: flex;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 20rem;
  background: grey;
  color: white;
  border: 2px solid green;
`;

const Account = () => {
  const navigate = useNavigate();
  return (
    <ProfileCard>
      <Button onClick={() => navigate('/home')}>
        <Link to="/home">Visit your home</Link>Hello
      </Button>
      <PropButton propBtnColor="yellow"> rekredo</PropButton>
      Account
    </ProfileCard>
  );
};

export default Account;

import React, { useEffect } from 'react';
// import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import  PersonalProfile  from '../components/PersonalProfile';
import  BusinessProfile  from '../components/BusinessProfile';

import { Button, PropButton } from '../styledElements/Buttons';
import { StyledProfileCard } from '../styledElements/Card';

const Account = () => {
  const navigate = useNavigate();
  const accessToken = useSelector((store) => store.user.accessToken);
  const user = useSelector((store) => store.user);

  useEffect(() => {
    if (!accessToken) {
      navigate('/log-in');
    }
  }, [accessToken, navigate]);

  const accountType = () => {
    if (user.vatNumber) {
      return 'business';
    } else return 'personal';
  };

  return (
    <>
      <StyledProfileCard>
        <Button onClick={() => navigate('/contact')}>
          need help? click here
        </Button>
        <PropButton propBtnColor="yellow"> This is a propbutton</PropButton>
        Account
      </StyledProfileCard>
      {accountType() === 'personal' && <PersonalProfile />}
      {accountType() === 'business' && <BusinessProfile />}
    </>
  );
};

export default Account;

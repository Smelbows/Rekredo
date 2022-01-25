import React from 'react';
// import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { Button, PropButton } from '../styledElements/Buttons';
import { UploadImage } from '../components/UploadImage';
import { UploadProduct } from 'components/UploadProduct';

import { ProfileCard } from '../styledElements/Card';

const Account = () => {
  const navigate = useNavigate();
  return (
    <>
      <ProfileCard>
        <Button onClick={() => navigate('/')}>Hello</Button>
        <PropButton propBtnColor="yellow"> rekredo</PropButton>
        Account
        <UploadImage />
        <UploadProduct />
      </ProfileCard>
    </>
  );
};

export default Account;

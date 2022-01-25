import React from 'react';
// import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

import { Button, PropButton } from '../components/Buttons';
import { UploadImage } from '../components/UploadImage';
import { UploadProduct } from 'components/UploadProduct';

import { ProfileCard } from '../components/Card';

const Account = () => {
  const navigate = useNavigate();
  return (
    <>
      <ProfileCard>
        <Button onClick={() => navigate('/')}>
          <Link to="/home">Visit your home</Link>Hello
        </Button>
        <PropButton propBtnColor="yellow"> rekredo</PropButton>
        Account
        <UploadImage />
        <UploadProduct />
      </ProfileCard>
    </>
  );
};

export default Account;

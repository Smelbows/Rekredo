import React from 'react';
// import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StyledProfileCard } from 'styledElements/Card';
import { Button, PropButton } from '../../../styledElements/Buttons';
import { H2 } from 'styledElements/Texts';

const ProfileCard = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <StyledProfileCard>
      <div>
          <H2>Account Details</H2>
        <Button onClick={() => navigate('/contact')}>
          need help? click here
        </Button>
        <PropButton propBtnColor="yellow"> This is a propbutton</PropButton>
        Account
      </div>
    </StyledProfileCard>
  );
};

export default ProfileCard;

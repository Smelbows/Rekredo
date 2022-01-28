import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { StyledProfileCard } from 'styledElements/Card';
import { Button, PropButton } from '../styledElements/Buttons';

const ProfileCard = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  return (
    <StyledProfileCard>
      <div>
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

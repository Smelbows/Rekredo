import React from 'react';
// import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StyledProfileCard } from 'styledElements/Card';
import { Button } from '../../../styledElements/Buttons';
import { H2, P } from 'styledElements/Texts';

const ProfileCard = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <StyledProfileCard>
      <div>
        <H2>Account Details</H2>
        <div>
          <P>Hello {user.username}</P>
          <Button>Edit username</Button>
        </div>
        <div>
          <P>Account type: {user.accountType}</P>
          <Button>Edit account type</Button>
        </div>
        <div>
          <P>Email: {user.email}</P>
          <Button>Edit email</Button>
        </div>
        <Button>Delete account</Button>
        <Button onClick={() => navigate('/contact')}>
          need help? click here
        </Button>
      </div>
    </StyledProfileCard>
  );
};

export default ProfileCard;

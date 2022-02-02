import React, { useEffect } from 'react';

import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import PersonalProfile from '../components/PersonalProfile';
import BusinessProfile from '../components/BusinessProfile';
import ProfileCard from 'components/ProfileCard';

// import { Button, PropButton } from '../styledElements/Buttons';
// import { StyledProfileCard } from '../styledElements/Card';
import { Main } from '../styledElements/Card';

const BigSection = styled.section`
  display: flex;
  justify-content: space-evenly;
  padding: 2em;
  width: 100vw;
  background: var(--saffron);
  & > .background {
    width: 100%;
  }
`;

const Account = () => {
  const navigate = useNavigate();
  const accessToken = useSelector((store) => store.user.accessToken);
  const user = useSelector((store) => store.user);

  useEffect(() => {
    if (!accessToken) {
      navigate('/log-in');
    }
  }, [accessToken, navigate]);

  return (
    <Main>
      <BigSection>
        <ProfileCard />
        {user.accountType === 'Personal' && <PersonalProfile />}
        {user.accountType === 'Business' && <BusinessProfile />}
      </BigSection>
    </Main>
  );
};

export default Account;

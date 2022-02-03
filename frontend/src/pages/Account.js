import React, { useEffect, useState } from 'react';

import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getUserDetails } from '../reducers/user'

import Upload from '../components/Upload';
import BusinessProfile from '../components/BusinessProfile';
import ProfileCard from 'components/ProfileCard';
import PersonalAccountNav from '../components/PersonalAccountNav';
import BusinessAccountNav from '../components/BusinessAccNav';

// import { Button, PropButton } from '../styledElements/Buttons';
// import { StyledProfileCard } from '../styledElements/Card';
import { BigSection } from '../styledElements/Card';
import { MiddleContainer } from 'styledElements/Container';

const AccountMain = styled(MiddleContainer)`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;
const AccountBigSection = styled(BigSection)`
  display: flex;
  padding: 2em;
  width: 80%;
  &:nth-child(2n) {
    background-color: var(--saffron);
  }
  background: var(--saffron);
  & > .background {
    width: 100%;
  }
`;
const Aside = styled.section`
  width 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  /* padding: 3em; */
  height: 100vh;
  background: var(--wintergreen);
`;

const Account = () => {
  const navigate = useNavigate();

  const [activeSection, setActiveSection] = useState('none');

  const accessToken = useSelector((store) => store.user.accessToken);
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!accessToken) {
      navigate('/log-in');
    } else {
      dispatch(getUserDetails(accessToken))
    }
  }, [accessToken, navigate, dispatch]);

  // useEffect(() => {
  //   if (accessToken) {
  //   dispatch(getUserDetails(accessToken))
  // }}, [dispatch, accessToken]
  // );

  return (
    <AccountMain>
      <Aside>
        {user.accountType === 'Personal' && (
          <PersonalAccountNav
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
        )}
        {user.accountType === 'Business' && (
          <BusinessAccountNav
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
        )}
      </Aside>
      <AccountBigSection>
        {activeSection === 'upload new' && <Upload />}
        {activeSection === 'update account' && <ProfileCard />}
        {activeSection === 'view props' && <h1>all my props component</h1>}
        {activeSection === 'orders' && <h1>all my orders component</h1>}
        {activeSection === 'cart' && <BusinessProfile />}
        {activeSection === 'messages' && <h1>my messages here</h1>}
      </AccountBigSection>
    </AccountMain>
  );
};

export default Account;

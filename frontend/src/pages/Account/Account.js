import React, { useEffect, useState } from 'react';

import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getUserDetails } from '../../reducers/user';

import Upload from './Components/Upload';
import BusinessProfile from './Components/BusinessProfile';
import ProfileCard from './Components/ProfileCard';
import PersonalAccountNav from './Components/PersonalAccountNav';
import BusinessAccountNav from './Components/BusinessAccNav';
import Summary from './Summary';
import MyOrders from './Components/MyOrders';
import MyProps from './Components/MyProps';
import Messages from './Components/Messages';

import testAccount from '../../images/test-account.png';

// import { Button, PropButton } from '../styledElements/Buttons';
// import { StyledProfileCard } from '../styledElements/Card';
import { BigSection } from '../../styledElements/Card';
import { MiddleContainer } from '../../styledElements/Container';

const AccountMain = styled(MiddleContainer)`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    max-width: 100vw;
    justify-content: space-between;
  }
`;

const AccountBigSection = styled(BigSection)`
  display: block;
  padding: 0;
  height: 85%;
  width: 100vw;
  border-left: solid var(--wintergreen) 0.5px;
  &:nth-child(2n) {
    background-color: var(--white);
  }
  background: var(--saffron);
  & > .background {
    width: 100%;
  }

  @media (min-width: 768px) {
    width: 80%;
    /* padding: 2em; */
  }
`;
const Aside = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  height: 15%;
  background: var(--white);
  & > :first-child {
    grid-column: 1 / 5;
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr;
    & > :first-child {
      grid-column: 1 / 2;
    }
    width: 20%;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-bottom: solid 0.5px;
  padding: 20px;

  & > img {
    width: 60%;
  }
  & > p {
    font-size: 1.5em;
  }
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
      dispatch(getUserDetails(accessToken));
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
        <ProfileContainer>
          <img src={testAccount} alt="profile-pic"></img>
          <p>{user.username}</p>
        </ProfileContainer>
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
        {activeSection === 'none' && <Summary />}
        {activeSection === 'upload new' && <Upload />}
        {activeSection === 'update account' && <ProfileCard />}
        {activeSection === 'view props' && <MyProps />}
        {activeSection === 'orders' && <MyOrders />}
        {activeSection === 'cart' && <BusinessProfile />}
        {activeSection === 'messages' && <Messages />}
      </AccountBigSection>
    </AccountMain>
  );
};

export default Account;

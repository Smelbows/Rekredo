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
    height: 80vh;
    justify-content: space-between;
  }
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
  @media (max-width: 768px) {
    display: flex;
    width: 100vw;
    height: 85%;
    font-size: 10px;
  }
`;
const Aside = styled.section`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  /* padding: 3em; */
  height: 100vh;
  background: var(--wintergreen);
  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 15%;
    font-size: 10px;
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
  console.log(activeSection, 'active now');

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
        {activeSection === 'none' && <Summary />}
        {activeSection === 'upload new' && <Upload />}
        {activeSection === 'update account' && <ProfileCard />}
        {activeSection === 'view props' && <MyProps />}
        {activeSection === 'orders' && <MyOrders />}
        {activeSection === 'cart' && <BusinessProfile />}
        {activeSection === 'messages' && <h1>my messages here</h1>}
      </AccountBigSection>
    </AccountMain>
  );
};

export default Account;

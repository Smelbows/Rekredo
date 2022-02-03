import React, { useEffect } from 'react';

import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { AsideButton } from 'styledElements/Buttons';

const PersonalAccountNav = ({ activeSection, setActiveSection }) => {
  useSelector((state) => state.user);

  return (
    <>
      <AsideButton onClick={() => setActiveSection('upload new')}>
        Upload New Prop
      </AsideButton>
      <AsideButton onClick={() => setActiveSection('update account')}>
        Account Settings
      </AsideButton>
      <AsideButton onClick={() => setActiveSection('view props')}>
        My Props
      </AsideButton>
      <AsideButton onClick={() => setActiveSection('messages')}>
        Messages
      </AsideButton>
    </>
  );
};

export default PersonalAccountNav;

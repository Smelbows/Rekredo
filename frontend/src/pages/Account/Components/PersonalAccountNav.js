import React from 'react';

import { useSelector } from 'react-redux';
import { AsideButton } from 'styledElements/Buttons';

import messages from '../../../images/messages.png';
import props from '../../../images/props.png';
import settings from '../../../images/settings.png';
import upload from '../../../images/upload.png';

const PersonalAccountNav = ({ activeSection, setActiveSection }) => {
  useSelector((state) => state.user);

  return (
    <>
      <AsideButton onClick={() => setActiveSection('upload new')}>
        <img src={upload} alt="upload icon"></img>
        <p>Upload New Prop</p>
      </AsideButton>
      <AsideButton onClick={() => setActiveSection('update account')}>
        <img src={settings} alt="settings icon"></img>
        Account Settings
      </AsideButton>
      <AsideButton onClick={() => setActiveSection('view props')}>
        <img src={props} alt="props icon"></img>
        My Props
      </AsideButton>
      <AsideButton onClick={() => setActiveSection('messages')}>
        <img src={messages} alt="message icon"></img>
        <p>Messages</p>
      </AsideButton>
    </>
  );
};

export default PersonalAccountNav;

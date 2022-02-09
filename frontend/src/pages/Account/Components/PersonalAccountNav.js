import React from 'react';

import { useSelector } from 'react-redux';
import { AsideButton } from 'styledElements/Buttons';
import { P } from 'styledElements/Texts';

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
        <P mobileDisplay="none">Upload New Prop</P>
      </AsideButton>
      <AsideButton onClick={() => setActiveSection('update account')}>
        <img src={settings} alt="settings icon"></img>
        <P mobileDisplay="none">Account Settings</P>
      </AsideButton>
      <AsideButton onClick={() => setActiveSection('view props')}>
        <img src={props} alt="props icon"></img>
        <P mobileDisplay="none">My Props</P>
      </AsideButton>
      <AsideButton onClick={() => setActiveSection('messages')}>
        <img src={messages} alt="message icon"></img>
        <P mobileDisplay="none">Messages</P>
      </AsideButton>
    </>
  );
};

export default PersonalAccountNav;

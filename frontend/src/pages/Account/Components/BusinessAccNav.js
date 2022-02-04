import React from 'react';

import { useSelector } from 'react-redux';

import { AsideButton } from 'styledElements/Buttons';

const BusinessAccountNav = ({ activeSection, setActiveSection }) => {
  useSelector((state) => state.user);

  return (
    <>
      <AsideButton onClick={() => setActiveSection('orders')}>
        My orders
      </AsideButton>
      <AsideButton onClick={() => setActiveSection('update account')}>
        Account Settings
      </AsideButton>
      <AsideButton onClick={() => setActiveSection('cart')}>Cart</AsideButton>
      <AsideButton onClick={() => setActiveSection('messages')}>
        Messages
      </AsideButton>
    </>
  );
};

export default BusinessAccountNav;

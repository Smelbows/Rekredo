import React from 'react';
import { useSelector } from 'react-redux';
import { AccountPageContainer } from 'styledElements/Card';
import MyOrders from './Components/MyOrders';
import MyProps from './Components/MyProps';

const Summary = () => {
  const accountType = useSelector((state) => state.user.accountType);

  return (
    <AccountPageContainer>
      {accountType === 'Personal' && <MyProps />}
      {accountType === 'Business' && <MyOrders />}
    </AccountPageContainer>
  );
};

export default Summary;

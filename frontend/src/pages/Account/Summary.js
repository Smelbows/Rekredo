import React from 'react';
import { useSelector } from 'react-redux';
import MyOrders from './Components/MyOrders';
import MyProps from './Components/MyOrders';

const Summary = () => {
  const accountType = useSelector((state) => state.user.accountType);
  console.log(accountType, 'account type in summary');

  return <>{accountType === 'Personal' ? <MyProps /> : <MyOrders />}</>;
};

export default Summary;

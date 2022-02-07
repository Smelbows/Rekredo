import React from 'react';
import { useSelector } from 'react-redux';
import  MyOrders from './Components/MyOrders';
import  MyProps  from './Components/MyOrders';



const Summary = () => {
  const accountType = useSelector((state) => state.user.accountType);
  return <>{accountType === 'Business' ? <MyOrders /> : <MyProps />}</>;
};

export default Summary;

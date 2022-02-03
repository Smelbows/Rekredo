import React from 'react';
import { useSelector } from 'react-redux';

const ViewOrders = () => {
  const orders = useSelector((state) => state.user.business);
  console.log(orders);
  return <div>Hi, orders here</div>;
};

export default ViewOrders;

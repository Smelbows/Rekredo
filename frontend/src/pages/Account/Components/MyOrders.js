import React from 'react';
import { H1, H2, H3 } from '../../../styledElements/Texts';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const OrderDiv = styled.div `
display: flex;
flex-direction: row; 
justify-content: space-between;
width: 70vw;

`;

const MyOrders = () => {
  const user = useSelector((state) => state.user)
    const orders = useSelector((state) => (state.user.business.orders))
    console.log(orders, "orders")
    console.log(user, "user")
  return (
  <>
  {orders ? orders.map((item) => (
          <OrderDiv key={item._id}>
            <H2>
              <H3>{item.completed}</H3>
            </H2>
            </OrderDiv>))
  
  : <H1>Your open orders</H1> }
  
  </>
  )
};

export default MyOrders;

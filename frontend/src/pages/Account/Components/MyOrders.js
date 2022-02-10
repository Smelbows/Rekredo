import React from 'react';
import { H1, H2, P, H4 } from '../../../styledElements/Texts';
import { useDispatch, useSelector } from 'react-redux';

import { deleteAnOrder } from 'reducers/user';

import styled from 'styled-components';
import { SmallButton } from '../../../styledElements/Buttons';
import { AccountPageContainer } from 'styledElements/Card';

const OrderDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  width: 70vw;
  border: 2px solid black;
  height: 60px;
  margin: 1em;
`;

const MyOrders = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const orders = useSelector((state) => state.user.business.orders);
  console.log(orders, 'orders');
  console.log(user, 'user');

  const handleDeleteOrder = (id) => {
    dispatch(deleteAnOrder(id));
  };

  return (
    <>
      <H4 backGroundColor="var(--wintergreen)">Your Orders</H4>

      <AccountPageContainer>
        {orders ? (
          orders.map((item) => (
            <OrderDiv key={item._id}>
              <div>
                <P>Orderid</P>
                <P>{orders.indexOf(item) + 1}</P>
              </div>
              <div>
                <P>Order#</P>
                <P>{item._id}</P>
              </div>

              <div>
                <P>Number of products</P>
                <P>{item.products?.length}</P>
              </div>
              <div>
                <P>Date</P>
                <P>{new Date(item.createdAt).toLocaleString()}</P>
              </div>
              <SmallButton onClick={() => handleDeleteOrder(item._id)}>
                Delete
              </SmallButton>
            </OrderDiv>
          ))
        ) : (
          <H2>No orders to display</H2>
        )}
      </AccountPageContainer>
    </>
  );
};

export default MyOrders;

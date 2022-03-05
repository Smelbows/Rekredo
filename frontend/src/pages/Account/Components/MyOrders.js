import React from 'react';
import { H2, P, H4 } from '../../../styledElements/Texts';
import { useDispatch, useSelector } from 'react-redux';

import { deleteAnOrder } from 'reducers/user';

import styled from 'styled-components';
import { SmallButton } from '../../../styledElements/Buttons';
import { AccountPageContainer } from 'styledElements/Card';

const OrderDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: left;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 95%;
  border: 1px solid black;
  margin: 1em;
  padding: 1em;
  :hover {
    box-shadow: inset 0 0 10px var(--wintergreen);
    cursor: pointer;
  }
  @media (max-width: 420px) {
    flex-direction: column;
    width: 70%;
    font-size: 12px;
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

const MyOrders = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const orders = useSelector((state) => state.user.business.orders);

  const handleDeleteOrder = (id) => {
    dispatch(deleteAnOrder(id));
  };

  return (
    <>
      <H4 shadow="0 2px 2px black" backGroundColor="var(--wintergreen)">
        My Orders
      </H4>

      <AccountPageContainer>
        {orders ? (
          orders.map((item) => (
            <OrderDiv key={item._id}>
              <Div>
                <P>id</P>
                <P>{orders.indexOf(item) + 1}</P>
              </Div>
              <Div>
                <P>Order#</P>
                <P>{item._id}</P>
              </Div>

              <Div>
                <P># of products: </P>
                <P>{item.products?.length}</P>
              </Div>
              <Div>
                <P>Date </P>
                <P>{new Date(item.createdAt).toLocaleDateString()}</P>
              </Div>
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

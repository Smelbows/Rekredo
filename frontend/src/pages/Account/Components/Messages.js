import React from 'react';
import { H4 } from 'styledElements/Texts';
import { AccountPageContainer } from 'styledElements/Card';
import styled from 'styled-components';

const MessageContainer = styled.div`
  display: grid;

  border: solid black 2px;
  height: 60px;
  width: 100%;
`;

const Messages = () => {
  return (
    <>
      <H4 backGroundColor="var(--wintergreen)">Inbox</H4>

      <AccountPageContainer>
        <MessageContainer>Message</MessageContainer>
      </AccountPageContainer>
    </>
  );
};

export default Messages;

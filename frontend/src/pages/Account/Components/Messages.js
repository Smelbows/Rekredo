import React from 'react';

import styled from 'styled-components';

import { H4 } from 'styledElements/Texts';
import { AccountPageContainer } from 'styledElements/Card';

import bin from '../../../images/bin.png';

const MessageContainer = styled.div`
  display: grid;
  grid-template-columns: 50px auto 50px;
  align-items: center;
  border: 2px solid black;
  margin: 1em;
  padding: 1em;

  & > img {
    height: 25px;
  }

  & > input {
    height: 25px;
    width: 25px;
  }

  & > p {
    width: 400px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const Messages = () => {
  return (
    <>
      <H4 shadow="0 2px 2px black" backGroundColor="var(--wintergreen)">
        Inbox
      </H4>

      <AccountPageContainer>
        <MessageContainer>
          <input type="checkbox" />
          <p>This is a sample message</p>
          <img src={bin} alt="delete bin"></img>
        </MessageContainer>
        <MessageContainer>
          <input type="checkbox" />
          <p>
            This is a sample message with a really super uper long message in it
            to see what happens let's see
          </p>
          <img src={bin} alt="delete bin"></img>
        </MessageContainer>
      </AccountPageContainer>
    </>
  );
};

export default Messages;

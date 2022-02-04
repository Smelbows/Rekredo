import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from 'styledElements/Buttons';
import { P } from 'styledElements/Texts';
import { Logout } from 'pages/Footer/Components/Logout';

const NavButton = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 15rem;
`;

const NavSwitcher = () => {
  const navigate = useNavigate();
  const accessToken = useSelector((state) => state.user.accessToken);
  const username = useSelector((state) => state.user.username);

  return (
    <>
      {!accessToken ? (
        <NavButton>
          <Button propBtnColor="gray" onClick={() => navigate('/register')}>
            Register
          </Button>
          <Button propBtnColor="gray" onClick={() => navigate('/log-in')}>
            Log in
          </Button>
        </NavButton>
      ) : (
        <NavButton>
          <P>Logged in as {username} </P>
          <Logout />
        </NavButton>
      )}
    </>
  );
};

export default NavSwitcher;

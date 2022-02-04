import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from 'styledElements/Buttons';
import { Logout } from 'pages/Footer/Components/Logout';

const NavButton = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 15rem;
`;

const NavSwitcher = () => {
  const navigate = useNavigate();
  const accessToken = useSelector((state) => state.user.accessToken);

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
        <Logout />
      )}
    </>
  );
};

export default NavSwitcher;

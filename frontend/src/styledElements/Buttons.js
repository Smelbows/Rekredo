import styled from 'styled-components';

export const Button = styled.button`
  display: inline-block;
  font-family: var(--fontone);
  border-radius: 3px;
  padding: 0.5rem;
  margin: 0.5rem 1rem;
  width: 8rem;
  background: ${(props) => props.background || 'transparent'};
  color: ${(props) => props.propBtnColor || 'var(--white)'};
  border: 1px solid black;
  :disabled {
    opacity: 1;
    color: var(--black);
    border: 2px black solid;
  }
  :hover {
    box-shadow: 0 0 10px var(--saffron);
    cursor: pointer;
  }
`;

export const SmallButton = styled.button`
  display: inline-block;
  font-family: var(--fonttwo);
  border-radius: 3px 10%;
  padding: 0.5rem 0;
  margin: 0.5rem 0.2rem;
  width: 5rem;
  background: transparent;
  color: black;
  border: 2px solid black;
  box-shadow: 1px 1px 1px 1px black;
  text-align: center;
`;

export const PropButton = styled.button`
  display: inline-block;
  font-family: 'Montserrat', sans-serif;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: ${(props) => props.propBtnColor || 'red'};
  border: 2px solid white;
`;

export const AsideButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
  font-size: 1em;
  height: 60px;
  width: 100%;
  border: 0;
  border-bottom: solid 0.5px;
  padding-left: 10%;
  background-color: var(--white);

  @media (min-width: 768px) {
    justify-content: flex-start;
  }

  :hover {
    background-color: var(--wintergreen);
    color: var(--white);
    cursor: pointer;
  }
`;

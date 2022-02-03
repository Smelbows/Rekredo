import styled from 'styled-components';

export const Button = styled.button`
  display: inline-block;
  font-family: var(--fontone);
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 8rem;
  background: transparent;
  color: var(--white);
  border: 1px solid black;
  :disabled {
    opacity: 0.8;
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
  font-family: 'Montserrat', sans-serif;
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

export const AsideButton = styled.button`
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
  margin:10px;
  font-size: 20px;
  height: 50px;
  box-shadow: 1px 1px 1px black;
  border-radius: 10px;

`

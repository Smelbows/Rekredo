import styled from 'styled-components';

export const Button = styled.button`
  display: inline-block;
  font-family: 'Montserrat', sans-serif;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;
`;

export const SmallButton = styled.a`
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

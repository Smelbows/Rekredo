import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: grey;
  color: darkblue;
  border: 2px solid red;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-radius: 1px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 100vw;
  background: lightgrey;
`;

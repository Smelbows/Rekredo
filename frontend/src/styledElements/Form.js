import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 10px;
  align-items: center;
`;

export const StyledInput = styled.input`
  padding: 5px;
  font-size: 1.2em;
  border: 1px solid black;
  margin: 5px;
  padding: 5px;
  border-radius: 3px;
  /* margin-bottom: 10px; */

  // -webkit-appearance: none;
  // -moz-appearance: none;
  // appearance: none;
`;

export const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  margin: 6em;
  padding: 1em;
  box-shadow: 0 0 40px grey;

  @media (min-width: 768px) {
    /* height: 60vh; */
    /* width: 60vw; */
  }
`;

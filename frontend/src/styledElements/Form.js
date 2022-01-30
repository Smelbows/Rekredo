import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 10px;
  align-items: center;
`;

export const StyledInput = styled.input`
  padding: 5px;
  font-size: 16px;
  border: none;
  border-radius: 3px;
  /* margin-bottom: 10px; */

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

export const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    /* height: 60vh; */
    /* width: 60vw; */
  }
`;

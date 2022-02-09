import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: ${(props) => props.padding || '10px'};
  align-items: center;
  justify-content: center;
`;

export const StyledInput = styled.input`
  padding: 5px;
  font-size: 1.2em;
  border: 1px solid black;
  margin: ${(props) => props.margin || '5px'};
  padding: ${(props) => props.padding || '5px'};
  border-radius: 3px;
  width: 100%;
  height: 50px;
  /* margin-bottom: 10px; */

  // -webkit-appearance: none;
  // -moz-appearance: none;
  // appearance: none;
`;

export const TextArea = styled.textarea`
  margin: ${(props) => props.margin || '5px'};
  padding: ${(props) => props.padding || '5px'};
  height: 100px;
  width: 100%;
`;

export const Label = styled.label`
  padding: ${(props) => props.padding || '10px 35px'};

  /* padding: 10px 35px; */
  font-size: 1.2em;
  border-radius: 3px;
  margin-bottom: ${(props) => props.bottom || '20px'};
  display: flex;
  flex-direction: column;
  text-align: ${(props) => props.textAlign || 'center'};
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

export const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${(props) => props.margin || ' 0 auto'};
  justify-content: center;
  align-items: center;
  padding: 1em;
  box-shadow: 0 0 40px grey;

  @media (min-width: 768px) {
    /* height: 60vh; */
    /* width: 60vw; */
  }
`;

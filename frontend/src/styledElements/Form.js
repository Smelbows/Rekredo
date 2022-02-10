import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: ${(props) => props.padding || '10px'};
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (min-width: 768px) {
    width: 90%;
    max-width: 400px;
  }
`;

export const StyledInput = styled.input`
  padding: 5px;
  font-size: 1.2em;
  border: 1px solid black;
  margin: ${(props) => props.margin || '5px'};
  padding: ${(props) => props.padding || '5px'};
  border-radius: 3px;
  width: 100%;
  height: ${(props) => props.height || '50px'};
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
  font-size: 1em;
  border-radius: 3px;
  margin-bottom: ${(props) => props.bottom || '20px'};
  display: flex;
  flex-direction: column;
  text-align: ${(props) => props.textAlign || 'center'};
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  @media (min-width: 768px) {
    font-size: 1.2em;
  }
`;

export const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${(props) => props.margin || ' 0 auto'};
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 40px grey;
  width: 300px;

  @media (min-width: 768px) {
    width: 400px;
  }
  @media (min-width: 1024px) {
    width: 700px;
  }
`;

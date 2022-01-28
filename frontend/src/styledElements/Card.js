import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  padding: 1em;
  margin: 1rem 1rem;
  background: green;
  color: white;
  border: 2px solid red;
  justify-content: space-evenly;
`;

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 3px;
  padding: 0.5rem;
  margin: 0.5rem 1rem;
  min-height: 100px;
  width: 200px;
  background: grey;
  border: 1px solid black;
  color: black;
`;

export const StyledProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 20rem;
  background: red;
  color: white;
  border: 2px solid green;
`;

export const Main = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  /* padding: 0.5rem 0; */
  /* min-height: 10em; */
  width: 100vw;
  background: grey;
  min-height: 70vh;
  box-sizing: border-box;
  padding-bottom: 10px;


  @media (min-width: 768px) {
     padding-bottom: 15rem;
  }
`;

export const BigSection = styled.section`
  display: flex;
  padding: 0.5em 0;
  width: 100vw;
  height: 20em;
  background: blue;
  & > .background {
    width: 100%;
  }
`;

export const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  margin: 0 auto;
  width: 100vw;
  background-color: white;
  font-family: 'Lora', serif;
`;
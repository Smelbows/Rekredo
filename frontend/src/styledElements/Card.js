import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 1em;
  width: 40vw;
  background: var(--wintergreen);
  color: var(--black);
  justify-content: space-between;
  box-shadow: 2px 2px 2px 2px grey;
`;

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 10px;
  padding: 0.5rem;
  margin: 0.5rem 1rem;
  min-height: 100px;
  width: 300px;
  background-color: var(--wintergreen);
  color: black;
  box-shadow: 2px 2px 2px 2px grey;
`;

export const StyledProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 0.5rem 0;
  width: 20rem;
  max-height: 400px;
  background: var(--wintergreen);
  color: var(--white);
  box-shadow: 2px 2px 2px 2px grey;
`;

export const Main = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  /* padding: 0.5rem 0; */
  /* min-height: 10em; */
  width: 100vw;
  background: var(--white);
  min-height: 70vh;
  box-sizing: border-box;
  padding-bottom: 10px;

  @media (min-width: 768px) {
    padding-bottom: 8em;
  }
`;

export const BigSection = styled.section`
  display: flex;
  justify-content: space-evenly;
  padding: 2em;
  width: 100vw;
  padding-bottom: 2em;
  background: var(--saffron);
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

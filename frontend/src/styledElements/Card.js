import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 1em;
  width: 40vw;
  background: var(--wintergreen);
  color: var(--black);
  justify-content: space-evenly;
  box-shadow: 2px 2px 2px 2px grey;
  @media (max-width: 768px) {
    width: 100vw;
  }
`;

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 8px;
  padding: 1.2em 1em 1.2em 1em;
  margin: 0.75rem;
  max-height: 450px;
  width: 300px;
  background-color: var(--saffron);
  box-shadow: -7px -9px 16px -6px #f7d7a8, 10px 7px 17px -6px grey;
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
  /* padding-bottom: 10px; */

  @media (min-width: 768px) {
    /* padding-bottom: 8em; */
  }
`;

export const BigSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1em;
  justify-content: space-evenly;
  /* padding: 8em 0em 8em 0em; */
  width: 100vw;
  &:nth-child(2n) {
    background-color: var(--wintergreen);
  }
  background: var(--white);
  & > .background {
    width: 100%;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    padding: 1em;
    width: 80%;
    margin: 0 auto;
  }
`;

export const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* margin: 1em; */
  align-items: center;
  /* margin: 0 auto; */
  width: 100vw;
  padding: 4em 1em 8em 1em;
  background-color: white;
`;

export const AccountPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 0.5em;
  width: 95vw;
  margin: 0 auto;
  height: 100%;

  @media (min-width: 768px) {
    width: 560px;
    min-height: 70vh;
  }

  @media (min-width: 1024px) {
    width: 700px;
    min-height: 70vh;
  }
`;

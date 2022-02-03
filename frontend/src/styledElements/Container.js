import styled from 'styled-components';

export const MainContainer = styled.main`
  width: 100vw;
`;

export const MiddleContainer = styled.div`
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
`
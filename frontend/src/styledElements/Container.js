import styled from 'styled-components';

export const MainContainer = styled.main`
  width: 100vw;
`;

export const MiddleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  /* padding: 1em 0; */

  background: var(--white);
  /* min-height: 70vh; */
  box-sizing: border-box;

  @media (min-width: 768px) {
    /* padding-bottom: 8em; */
    justify-content: ${(props) => props.justify || 'center'};
    width: 100vw;
    margin-bottom: ${(props) => props.marginBottom || '0'};
  }
`;

import styled from 'styled-components';

export const H1 = styled.h1`
  font-size: 6em;
  font-family: var(--fontone);
  color: ${(props) => props.textColor || 'var(--black)'};
  text-decoration-line: ${(props) => props.textDecor || 'underline'};
  background-color: ${(props) => props.backGroundColor};
`;

export const H2 = styled.h2`
  font-size: 4em;
  font-family: var(--fontone);
  color: ${(props) => props.color || 'var(--black)'};
  line-height: ${(props) => props.height};
  font-weight: ${(props) => props.weight};
`;

export const H3 = styled.h3`
  font-size: 3em;
  font-family: var(--fontone);
  color: ${(props) => props.color || 'var(--white)'};
`;
export const H4 = styled.h4`
  font-size: 2em;
  font-family: var(--fontone);
  color: ${(props) => props.color || 'var(--white)'};
  line-height: ${(props) => props.height};
  font-weight: ${(props) => props.weight};
  background-color: ${(props) => props.backGroundColor};
  padding: ${(props) => props.padding || '1em'};
`;

export const H5 = styled.h5`
  font-size: 1.5em;
  font-family: var(--fontone);
  color: ${(props) => props.color || 'var(--white)'};
  line-height: ${(props) => props.height};
  font-weight: ${(props) => props.weight};
  padding-right: ${(props) => props.paddingRight || '1em'};
`;
export const H6 = styled.h6`
  font-size: 1.25em;
  font-family: var(--fontone);
  color: ${(props) => props.color || 'var(--white)'};
  padding-bottom: ${(props) => props.paddingBottom};
  line-height: ${(props) => props.height};
  font-weight: ${(props) => props.weight};
`;

export const P = styled.p`
  display: ${(props) => props.mobileDisplay || 'inline'};
  font-size: 1em
  font-family: var(--fonttwo);
  color: ${(props) => props.color || 'var(--black)'};

  @media (min-width: 768px) {
    display: inline;
  }

`;

export const ProductText = styled.div`
  display: flex;
  flex-direction: column;
  font-family: var(--fontone);
`;

import styled from 'styled-components';

export const MovieListContainer = styled.div`
  width: 100vw;
  margin: auto;
  max-width: 1080px;
  padding: 5% 10px;
  min-height: 100vh;
  background-color: whitesmoke;

`;

export const List = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;
  margin: 30px 0;
`;

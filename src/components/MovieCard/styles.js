import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
`;

export const MoviePoster = styled.img`
  /* width: 100%; */
  object-fit: cover;
  border-radius: 1rem;
`;

export const MovieName = styled.h4`
  font-size: 0.5rem;
`;

import styled from 'styled-components';

export const FilterButton = styled.button`
  width: 120px;
  border: ${(props) => (props.active ? null : '2px solid #4C76BD')};
  padding: 5px 10px;
  background-color: ${(props) => (props.active ? '#4C76BD' : 'transparent')};
  border-radius: 50px;
  color: ${(props) => (props.active ? '#FFFF' : '#4C76BD')};
  font-weight: 800;
  cursor: pointer;
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px;
  @media(min-width: 768px) {
    position: absolute;
    top: 0;
    left: -150px;
    flex-direction: column;

  }
`;

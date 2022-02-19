import styled from 'styled-components';

export const FilterButton = styled.button`
  width: 120px;
  border: ${(props) => (props.active ? null : '2px solid #004385')};
  padding: 5px 10px;
  background-color: ${(props) => (props.active ? '#004385' : 'transparent')};
  border-radius: 50px;
  color: ${(props) => (props.active ? '#FFFF' : '#004385')};
  font-weight: 800;
  cursor: pointer;
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px;
`;

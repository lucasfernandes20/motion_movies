import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  :before {
    content: attr(data-hover);
    visibility: hidden;
    opacity: 0;
    width: 70%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(10.5px);
    -webkit-backdrop-filter: blur(10.5px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    color: #fff;
    /* text-align: center; */
  overflow: hidden;
  text-overflow: ellipsis;
    text-indent: 1rem;
    font-size: 14px;
    padding: 10px;
    transition: opacity 200ms ease-in-out;
    position: absolute;
    z-index: 1000000;
    left: 15%;
    top: 0;
  }
  :hover:before {
    opacity: 1;
    visibility: visible;
  }
`;

export const MoviePoster = styled.img`
  width: 70%;
  object-fit: cover;
  border-radius: 1rem;
`;

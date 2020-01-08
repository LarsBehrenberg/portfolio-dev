import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  border-radius: 3rem;
  padding: 0.7rem 2.5rem;
  border: none;

  color: rgb(255, 255, 255);
  box-shadow: rgba(0, 196, 255, 0.9) 0px 13px 19px -6px;
  text-decoration: none;
  padding: 0.9rem 1.4rem;
  background: #3498db;
  border-radius: 0.3rem;
  transition: all 0.5s ease 0s;

  -webkit-appearance: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #fff;
  background: #3498db;

  &:focus {
    outline: none;
  }

  &:disabled {
    background: gray;
  }

  &:hover {
    transform: scale(1.1) perspective(1px)
  }
  
  
  ${({ secondary }) =>
    secondary &&
    `
		background: #3498db;
	`}
`;

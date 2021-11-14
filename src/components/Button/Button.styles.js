import styled from "styled-components/macro";

export const ButtonWrapper = styled.button`
  background: none;
  padding: 0.5rem 2rem;
  width: 100%;
  border: 0;
  color: ${(props) => props.theme.text};
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: color 700ms, background 0.1s;
  margin-top: 5px;

  &:hover {
    background: ${(props) => props.theme.hover};
  }
`;

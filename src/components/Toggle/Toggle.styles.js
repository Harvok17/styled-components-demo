import styled, { css } from "styled-components/macro";

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.toggle};
  width: 5em;
  height: 2.5em;
  border-radius: 5em;
  padding: 0.7em;
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
  transition: background-color 300ms ease-in;
  box-shadow: 3px 3px 20px -6px rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export const Knob = styled.div`
  width: 50%;
  height: 0;
  padding-bottom: 50%;
  background: ${(props) => props.theme.knob};
  border-radius: 50%;
  transform: translateX(0);
  transition: transform 700ms cubic-bezier(0.5, 0, 0.5, 1);
  position: relative;
  border: none;
  &::before {
    content: "";
    display: block;
    background-color: ${(props) => props.theme.toggle};
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    left: -100%;
    transform-origin: center top;
    transform: translateX(0);
    transition: transform 700ms cubic-bezier(0.5, 0, 0.5, 1),
      background-color 300ms ease-in;
  }

  ${(props) =>
    props.mode === "dark" &&
    css`
      transform: translateX(100%) rotate(25deg);
      &::before {
        transform: translateX(100%) rotate(45deg);
        background-color: props.theme.toggle;
      }
    `}
`;

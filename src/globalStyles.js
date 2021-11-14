import styled, { createGlobalStyle } from "styled-components/macro";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) => props.theme.body};
    font-family: sans-serif;
    transition: background-color 700ms cubic-bezier(.5, 0, .5, 1);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  height: 80vh;
`;

export default GlobalStyles;

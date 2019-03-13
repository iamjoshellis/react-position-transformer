import styled, { css, createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  html,
  body,
  #root {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }
  #root {
    background: linear-gradient(to bottom right, #4286f4, #373B44);
    position: relative;
  }
`;

const SHARED_CSS = css`
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 6px;
  font-weight: bold;
  font-family: monospace;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.9;
`;

export const Dest = styled.div`
  ${SHARED_CSS};
  background: #4286f4;
`;

export const Src = styled.div`
  ${SHARED_CSS};
  background: #373B44;
  color: #fff;
`;
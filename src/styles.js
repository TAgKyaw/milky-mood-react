import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 @keyframes glow {
   0% {
     box-shadow: rgb(252,210,23) 0 0 0px;
   }
   100% {
    box-shadow: rgb(252,210,23) 0 10px 100px;
   }
 }
  body {
    color: #FBFBFB;
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
    overflow: hidden;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    background: #2828;
    font-family: 'Work Sans', sans-serif;
    font-weight: 500;
  }
`;

export const Marginals = css`
  box-sizing: border-box;
  display: flex;
  pointer-events: none;
  position: fixed;
  width: 100vw;
  z-index: 1;
`;

export const ImageContainer = styled.div.attrs(({ $isTogether }) => ({
  style: {
    animation: $isTogether ? "glow 3s infinite alternate" : "none"
  }
}))`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  height: 600px;
  width: 400px;
`;

export const Wrapper = styled.section.attrs(({ $color }) => ({
  style: {
    backgroundColor: `hsl(${$color}, 79%, 53%)`
  }
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

export const AbsoluteCenter = css`
  left: 50%;
  top: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
`;

export const Button = styled.button`
  ${AbsoluteCenter}
  background: none;
  border: 2px solid #fbfbfb;
  border-radius: 100%;
  color: #fbfbfb;
  cursor: pointer;
  font-size: 34px;
  font-family: "Work Sans", sans-serif;
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;
  padding: 25px 0 20px;
  width: 300px;
  z-index: 1;

  @media (max-width: 700px) {
    font-size: 24px;
    width: 220px;
  }
`;

export const BG = styled.div`
  background: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: 2;
`;

export const Close = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
  height: 30px;
  width: 30px;
  padding: 0;
  position: absolute;
  right: 60px;
  top: 60px;

  &::before,
  &::after {
    background: #0519ce;
    content: "";
    position: absolute;
    height: 33px;
    width: 2px;
    left: 15px;
    top: 0;
  }
  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }

  @media (max-width: 700px) {
    right: 30px;
    top: 30px;
  }
`;

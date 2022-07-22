import React from "react";
import styled from "styled-components";
import { BG } from "./styles";

const Modal = styled.div`
  left: 50%;
  top: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  animation: glow 1s forwards;
  background: #fbfbfb;
  box-sizing: border-box;
  padding: 60px;
  max-width: 800px;
  width: calc(100vw - 60px);
  z-index: 3;

  @media (max-width: 700px) {
    padding: 30px;
    width: calc(100vw - 30px);
  }
`;

const ModalComponent = () => (
  <>
    <Modal />
    <BG />
  </>
);

export default ModalComponent;

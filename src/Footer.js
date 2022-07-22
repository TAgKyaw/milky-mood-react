import React from "react";
import styled from "styled-components";
import { Marginals } from "./styles";

const Footer = styled.footer`
  ${Marginals}
  bottom: 0;
  justify-content: space-between;
  padding: 15px;
`;

const H2 = styled.h2`
  font-size: 64px;
  font-weight: 600;
  line-height: 0.7;
  margin: 0;
  padding: 16px;

  @media (max-width: 900px) {
    font-size: 44px;
  }
  @media (max-width: 700px) {
    font-size: 24px;
    padding: 0%;
  }
`;
const H2Middle = styled(H2)`
  flex-grow: 1;
  position: relative;
  text-align: center;

  &::after {
    content: "";
    background-color: #fbfbfb;
    position: absolute;
    display: block;
    height: 2px;
    left: 15px;
    right: 15px;
    top: 55%;
  }
`;

const FooterComponent = () => (
  <Footer>
    <H2>Jun 12</H2>
    <H2Middle>World Tour</H2Middle>
    <H2>Aug 12</H2>
  </Footer>
);

export default FooterComponent;

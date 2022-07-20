import React from "react";
import styled from "styled-components";
import { Marginals } from "./styles";
import { ReactComponent as LogoSVG } from "./img/logo.svg";

const Logo = styled(LogoSVG)`
  height: auto;
  max-width: 760px;
  width: 100%;
`;

const Header = styled.header`
  ${Marginals}
  justify-content: center;
  padding: 30px;
`;

const HeaderComponent = () => (
  <Header>
    <Logo title="Milky Mood Logo" />
  </Header>
);

export default HeaderComponent;

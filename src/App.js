import React from "react";
import { GlobalStyle, ImageContainer, Wrapper } from "./styles";
import HeaderComponent from "./Header";
import FooterComponent from "./Footer";
import ImgBox from "./ImgBox";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <HeaderComponent />
      <FooterComponent />
      <Wrapper>
        <ImageContainer>
          <ImgBox />
        </ImageContainer>
      </Wrapper>
    </div>
  );
};
export default App;

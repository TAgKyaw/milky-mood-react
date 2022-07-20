import React from "react";
import { GlobalStyle } from "./styles";
import HeaderComponent from "./Header";
import FooterComponent from "./Footer";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <HeaderComponent />
      <FooterComponent />
    </div>
  );
};
export default App;

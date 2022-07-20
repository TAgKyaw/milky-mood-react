import React from "react";
import { GlobalStyle } from "./styles";
import HeaderComponent from "./Header";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <HeaderComponent />
      <h1>This is react</h1>
    </div>
  );
};
export default App;

import React, { useState } from "react";
import { GlobalStyle, ImageContainer, Wrapper } from "./styles";
import HeaderComponent from "./Header";
import FooterComponent from "./Footer";
import ImgBox from "./ImgBox";

// prettier-ignore
const matrix = [
  [0, 0],  [1, 0],  [2, 0],  [3, 0],
  [0, 1],  [1, 1],  [2, 1],  [3, 1],
  [0, 2],  [1, 2],  [2, 2],  [3, 2],
  [0, 3],  [1, 3],  [2, 3],  [3, 3],
  [0, 4],  [1, 4],  [2, 4],  [3, 4],
  [0, 5],  [1, 5],  [2, 5],  [3, 5],
];

const App = () => {
  const [distance, setDistance] = useState(1);

  const easing = (num) => Math.pow(num, 3);

  const calculateDistance = ([x, y]) => {
    const center = [window.innerWidth / 2, window.innerHeight / 2];
    const maxHypot = Math.hypot(center[0], center[1]);
    const hypot = Math.hypot(center[0] - x, center[1] - y);
    const distance = hypot / maxHypot;
    const easeDistance = easing(distance);
    setDistance(easeDistance);
  };

  const handleMouseMove = ({ clientX, clientY }) => {
    calculateDistance([clientX, clientY]);
  };

  const handleTouchMove = ({ touches }) => {
    calculateDistance([touches[0].clientX, touches[0].clientY]);
  };

  return (
    <div className="App">
      <GlobalStyle />
      <HeaderComponent />
      <FooterComponent />
      <Wrapper
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        $color={Math.round(240 - distance * 90)}
      >
        <ImageContainer $isTogether={distance < 0.001}>
          {matrix.map(([x, y], index) => (
            <ImgBox key={index} x={x} y={y} percent={distance} />
          ))}
        </ImageContainer>
      </Wrapper>
    </div>
  );
};
export default App;

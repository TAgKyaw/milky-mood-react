import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Image = styled.div.attrs(({ $movedX, $movedY }) => ({
  style: {
    transform: `translate(${$movedX}px, ${$movedY}px)`
  }
}))`
  background-image: url("/image1.jpeg");
  height: 100px;
  width: 100px;
  position: relative;
  background-position: ${({ $initialX, $initialY }) =>
    `-${$initialX * 100}px -${$initialY * 100}px`};
  background-size: 400px 600px;
`;

const ImgBox = ({ x, y, percent }) => {
  const [position, setPosition] = useState([0, 0]);

  useEffect(() => {
    //schdules events to trigger when dependency values change, will also render after every first render
    setPosition([
      Math.random() * 400 - x * 100 - 50,
      Math.random() * 600 - y * 100 - 50
    ]);
  }, [x, y]);

  console.log(position);
  return (
    <Image
      $initialX={x}
      $initialY={y}
      $movedX={position[0] * percent}
      $movedY={position[1] * percent}
    />
  );
};

export default ImgBox;

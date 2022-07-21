import React from "react";
import styled from "styled-components";

const Image = styled.div`
  background-image: url("/image1.jpeg");
  background-size: 400px 600px;
  height: 100px;
  width: 100px;
  position: relative;
`;

const ImgBox = () => {
  return <Image />;
};

export default ImgBox;

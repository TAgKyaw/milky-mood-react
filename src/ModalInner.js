import React, { useState } from "react";
import styled from "styled-components";
import FormComponent from "./Form";
import { ReactComponent as Happy } from "./img/happy_face.svg";
import { ReactComponent as Facebook } from "./img/icon_facebook.svg";
import { ReactComponent as Instagram } from "./img/icon_instagram.svg";
import { ReactComponent as Twitter } from "./img/icon_twitter.svg";

const Container = styled.div`
  color: #000;
  max-width: 440px;
`;

const H3 = styled.h3`
  font-size: 64px;
  font-weight: 600;
  margin: 0;
  color: #0519ce;
`;

const H4 = styled.h4`
  font-size: 34px;
  font-weight: 600;
  line-height: 1;
  margin: 20px 0 0;
  color: #0519ce;

  @media (max-width: 700px) {
    font-size: 24px;
  }
`;

const P = styled.p`
  font-size: 16px;
  margin: 20px 0;

  @media (max-width: 700px) {
    font-size: 14px;
  }
`;

const Socials = styled.div`
  display: flex;
  justify-content: center;

  svg {
    margin: 0 16px;
  }
`;

const SuccessContainer = styled(Container)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 50px auto;
  text-align: center;
`;

const Input = ({ handleSuccess }) => (
  <Container>
    <H3>Sign Up </H3>
    <P>
      Join our newsletter to be notified of when pre-release tickets for our
      first ever world tour go on sale.
    </P>
    <FormComponent handleSuccess={handleSuccess} />
  </Container>
);

const Success = () => (
  <SuccessContainer>
    <Happy />
    <H4>Yay! We're so excited!</H4>
    <p>
      We hope you are too. In the meantime you can follow us on social media to
      keep up to do date:
    </p>
    <Socials>
      <Instagram /> <Twitter /> <Facebook />
    </Socials>
  </SuccessContainer>
);

const ModalInner = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSuccess = () => {
    setShowSuccess(true);
  };
  return showSuccess ? <Success /> : <Input handleSuccess={handleSuccess} />;
};

export default ModalInner;

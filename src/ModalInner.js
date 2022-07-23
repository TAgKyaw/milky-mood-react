import React, { useState } from "react";
import styled from "styled-components";
import FormComponent from "./Form";

const Container = styled.div`
  color: #000;
  max-width: 440px;
`;

const ModalInner = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSuccess = () => {
    setShowSuccess(true);
  };
  return (
    <Container>
      {showSuccess ? (
        <>
          <h4>Yay! We're so excited!</h4>
          <p>
            We hope you are too. In the meantime you can follow us on social
            media to keep up to do date:
          </p>
        </>
      ) : (
        <>
          <h3>Sign Up </h3>
          <p>
            Join our newsletter to be notified of when pre-release tickets for
            our first ever world tour go on sale.
          </p>
        </>
      )}
      <FormComponent handleSuccess={handleSuccess} />
    </Container>
  );
};

export default ModalInner;

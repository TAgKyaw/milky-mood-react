import React from "react";
import * as Yup from "yup";
// import { Field } from "formik";
import { useField, Formik, Form } from "formik";
import styled from "styled-components";

const Input = styled.input`
  border: 2px solid #000;
  box-sizing: border-box;
  font-size: 18px;
  margin: 8px 0 24px;
  padding: 12px;
  width: 100%;

  &:focus {
    border-color: #0519ce;
  }

  @media (max-width: 700px) {
    font-size: 16px;
  }
`;

const Label = styled.label`
  font-weight: 600;
`;

const Error = styled.span`
  color: #e26e2d;
`;

const Submit = styled.button`
  background: none;
  border: 2px solid #0519ce;
  color: #0519ce;
  cursor: pointer;
  float: right;
  font-size: 700;
  padding: 12px;
  text-transform: uppercase;

  @media (max-width: 700px) {
    font-size: 16px;
  }
`;

const InputComponent = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <Label>
      {label}: {meta.touched && meta.error && <Error>{meta.error}</Error>}
      <Input {...field} {...props} />
    </Label>
  );
};

const FormComponent = ({ handleSuccess }) => {
  const schema = Yup.object().shape({
    name: Yup.string().required("Required field"),
    email: Yup.string()
      .email("Must be a valid email address")
      .required("Required Field")
  });
  return (
    <Formik
      initialValues={{ name: "", email: "" }}
      onSubmit={handleSuccess}
      validationSchema={schema}
    >
      {() => (
        <Form>
          <InputComponent
            name="name"
            type="text"
            label="Name"
            autoComplete="off"
          />
          <InputComponent
            name="email"
            type="email"
            label="Email"
            autoComplete="off"
          />
          <Submit type="submit">Submit</Submit>
        </Form>
      )}
    </Formik>
  );
};
/* {<label>Name:</label>
          <Field name="name" type="text" autoComplete="off" />
          {touched.name && errors && <div>{errors.name}</div>}
          <label>Email address:</label>
          <Field name="email" type="text" autoComplete="off" />
          {touched.errors && errors && <div>{errors.email}</div>}
          <button type="submit">Submit</button>} */
// <form onSubmit={handleSuccess}>
//   <label for="name">Name:</label>
//   <input name="name" type="text" required autoComplete="off" />
//   <label for="email">Email address:</label>
//   <input name="email" type="email" required autoComplete="off" />
//   <button type="submit">Submit</button>
// </form>

export default FormComponent;

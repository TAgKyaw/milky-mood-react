import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
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
      {({ errors, touched }) => (
        <Form>
          <label>Name:</label>
          <Field name="name" type="text" autoComplete="off" />
          {touched.name && errors && <div>{errors.name}</div>}
          <label>Email address:</label>
          <Field name="email" type="text" autoComplete="off" />
          {touched.errors && errors && <div>{errors.email}</div>}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
    // <form onSubmit={handleSuccess}>
    //   <label for="name">Name:</label>
    //   <input name="name" type="text" required autoComplete="off" />
    //   <label for="email">Email address:</label>
    //   <input name="email" type="email" required autoComplete="off" />
    //   <button type="submit">Submit</button>
    // </form>
  );
};

export default FormComponent;

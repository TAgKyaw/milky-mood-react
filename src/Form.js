import React from "react";
import * as Yup from "yup";
// import { Field } from "formik";
import { useField, Formik, Form } from "formik";

const InputComponent = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <label>
      {label}: {meta.touched && meta.error && <div>{meta.error}</div>}
      <input {...field} {...props} />
    </label>
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
      {({ errors, touched }) => (
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

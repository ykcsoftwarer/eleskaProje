import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().required("Ad alanı zorunludur"),
  lastName: Yup.string().required("Soyad alanı zorunludur"),
  phoneNumber: Yup.string()
    .matches(/^[0-9]+$/, "Geçersiz telefon numarası")
    .required("Telefon numarası alanı zorunludur"),
  password: Yup.string().required("Şifre alanı zorunludur"),
});

const initialValues = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  password: "",
};

const Register = () => {
  const handleSubmit = (values) => {
    // Giriş formuyla yapılan işlemleri burada gerçekleştirin
    console.log(values);
  };

  return (
    <div className={"details__wrapper"}>
      <h1>Giriş Sayfası</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="form__item ">
            <label htmlFor="firstName">Ad</label>
            <Field type="text" name="firstName" />
            <ErrorMessage
              className={"error__feedback"}
              name="firstName"
              component="div"
            />
          </div>

          <div className="form__item ">
            <label htmlFor="lastName">Soyad</label>
            <Field type="text" name="lastName" />
            <ErrorMessage
              className={"error__feedback"}
              name="lastName"
              component="div"
            />
          </div>

          <div className="form__item ">
            <label htmlFor="phoneNumber">Telefon Numarası</label>
            <Field type="text" name="phoneNumber" />
            <ErrorMessage
              className={"error__feedback"}
              name="phoneNumber"
              component="div"
            />
          </div>

          <div className="form__item ">
            <label htmlFor="password">Şifre</label>
            <Field type="password" name="password" />
            <ErrorMessage
              className={"error__feedback"}
              name="password"
              component="div"
            />
          </div>

          <button type="submit">Giriş Yap</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Register;

import React, { useContext } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";

import { Input, Select } from "formik-antd";
import MultiStepFormContext from "./MultiStepFormContext";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  city: Yup.string(),
  county: Yup.string().required("Bu alan zorunludur"),
  addresses: Yup.string().required("Bu alan zorunludur"),
});

const Address = () => {
  const { address, setAddress, next, prev } = useContext(MultiStepFormContext);

  return (
    <Formik
      initialValues={address}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        setAddress(values);
        next();
      }}
    >
      {({ handleSubmit, errors }) => (
        <Form className="details__wrapper">
          <div className={`form__item ${errors.city && "input__error"}`}>
            <label className="mb-1">Şehir *</label>
            <Select className="w-[100%]">
              <Field name="city" as={Input}>
                Random Adana
              </Field>
            </Select>

            <ErrorMessage
              name="city"
              component="p"
              className="error__feedback"
            />
          </div>
          <div className={`form__item ${errors.county && "input__error"}`}>
            <label className="mb-1">Semt *</label>
            <Field name="county" as={Input} />
            <ErrorMessage
              name="county"
              component="p"
              className="error__feedback"
            />
          </div>
          <div className={`form__item ${errors.addresses && "input__error"}`}>
            <label className="mb-1">Adres *</label>
            <Field name="addresses" as={Input} />
            <ErrorMessage
              name="addresses"
              component="p"
              className="error__feedback"
            />
          </div>

          <div className="form__item button__items d-flex justify-content-between">
            <button
              className="py-2 px-5 rounded smx:w-44 text-black bg-[#e0e0e0] hover:bg-black hover:text-[#e0e0e0] "
              onClick={prev}
            >
              Back
            </button>
            <button
              className="py-2 px-5  rounded smx:w-44 text-white bg-[#E12A32] hover:bg-[#e0e0e0] hover:text-[#E12A32]  "
              onClick={handleSubmit}
            >
              Next
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
export default Address;

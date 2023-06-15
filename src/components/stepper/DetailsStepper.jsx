import React, { useContext } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Button } from "antd";
import { Input, InputNumber } from "formik-antd";
import MultiStepFormContext from "./MultiStepFormContext";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().required("Bu alan zorunludur"),
  lastName: Yup.string().required("Bu alan zorunludur"),
  number: Yup.string()
    .matches(/^[0-9]+$/, "Bu alan sadece rakamlardan oluşmalıdır")
    .required("Bu alan zorunludur")
    .typeError("Numara girmelisiniz"),
  email: Yup.string()
    .email("Geçerli bir email adresi giriniz")
    .required("Bu alan zorunludur"),
  password: Yup.string()
    .required("Bu alan zorunludur")
    .min(8, "Şifreniz en az 8 karakter olmalıdır")
    .max(20, "Şifreniz en fazla 20 karakter olmalıdır")
    .matches(/\d+/, "Şifreniz bir sayı içermelidir")
    .matches(/[a-z]/, "Şifreniz bir küçük harf içermelidir")
    .matches(/[A-Z]/, "Şifreniz bir büyük harf içermelidir")
    .matches(/[!,?{}><%&$#£+-.]+/, "Şifreniz bir özel karakter içermelidir"),
  checkbox: Yup.bool().oneOf(
    [true],
    "You need to accept the terms and conditions"
  ),
  checkbox1: Yup.bool().oneOf(
    [true],
    "You need to accept the terms and conditions"
  ),
});

const DetailsStepper = () => {
  const { details, setDetails, next } = useContext(MultiStepFormContext);

  return (
    <Formik
      initialValues={details}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        setDetails(values);
        next();
      }}
    >
      {({ handleSubmit, errors }) => (
        <Form className="details__wrapper">
          <div className={`form__item ${errors.firstName && "input__error"}`}>
            <label className="mb-1">Adı *</label>
            <Field name="firstName" as={Input} />
            <ErrorMessage
              name="firstName"
              component="p"
              className="error__feedback"
            />
          </div>
          <div className={`form__item ${errors.lastName && "input__error"}`}>
            <label className="mb-1">Soyadı *</label>
            <Field name="lastName" as={Input} />
            <ErrorMessage
              name="lastName"
              component="p"
              className="error__feedback"
            />
          </div>
          <div className={`form__item ${errors.number && "input__error"}`}>
            <label className="mb-1">Telefon *</label>
            <Field name="number" as={Input} />
            <ErrorMessage
              name="number"
              component="p"
              className="error__feedback"
            />
          </div>
          <div className={`form__item ${errors.email && "input__error"}`}>
            <label className="mb-1">E-mail *</label>
            <Field name="email" as={Input} />
            <ErrorMessage
              name="email"
              component="p"
              className="error__feedback"
            />
          </div>
          <div className={`form__item ${errors.password && "input__error"}`}>
            <label className="mb-1">Şifre *</label>
            <Field type="password" name="password" as={Input} />
            <ErrorMessage
              name="password"
              component="p"
              className="error__feedback"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center">
              <Field
                id="link-checkbox"
                type="checkbox"
                name="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="link-checkbox"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                <a
                  href="#"
                  className="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Hizmet şartlarını{" "}
                </a>
                kabul ediyorum
              </label>
            </div>
            {errors.checkbox && (
              <p className="text-[#E12A32]">{errors.checkbox}</p>
            )}
          </div>
          <div className="flex flex-col">
            <div className="flex items-center">
              <Field
                id="link-checkbox1"
                type="checkbox"
                name="checkbox1"
                defaultValue=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-checkbox"
                className="ml-2 mt-2 text-sm font-medium text-gray-900 dark:text-gray-300 "
              >
                İndirimler, teklifler ve güncellemeler hakkında bilgi almak
                istiyorum
              </label>
            </div>
          </div>
          <div className="form__item button__items d-flex justify-end">
            <button
              className="py-2 px-5 mt-4  rounded smx:w-44 text-white bg-[#E12A32] hover:bg-[#e0e0e0] hover:text-[#E12A32]  "
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
export default DetailsStepper;

// import React, { useContext } from "react";
// import { Formik, Field, Form, ErrorMessage } from "formik";
// import { Button } from "antd";
// import { Input, InputNumber } from "formik-antd";
// import MultiStepFormContext from "./MultiStepFormContext";
// import * as Yup from "yup";

// const SignupSchema = Yup.object().shape({
//   firstName: Yup.string().required("Ad alanı zorunludur"),
//   lastName: Yup.string().required("Soyad alanı zorunludur"),
//   phoneNumber: Yup.string()
//     .matches(/^[0-9]+$/, "Geçersiz telefon numarası")
//     .required("Telefon numarası alanı zorunludur"),
//   password: Yup.string().required("Şifre alanı zorunludur"),
// });

// const DetailsStepper = () => {
//   const { details, setDetails, next } = useContext(MultiStepFormContext);
//   return (
//     <Formik
//       initialValues={details}
//       validationSchema={SignupSchema}
//       onSubmit={(values) => {
//         console.log(values);
//         setDetails(values);
//         next();
//       }}
//     >
//       {({ handleSubmit, errors }) => {
//         return (
//           <form className={"details__wrapper"} onSubmit={handleSubmit}>
//             <div className={"form__item"}>
//               <label>Adı *</label>
//               <Field
//                 className="border-black border-2 rounded p-2"
//                 type="text"
//                 name={"firstName"}
//               />
//               <ErrorMessage
//                 className={"error__feedback"}
//                 name="firstName"
//                 component="div"
//               />
//             </div>

//             <div className={"form__item"}>
//               <label>Soyadı *</label>
//               <Field
//                 className="border-black border-2 rounded p-2"
//                 type="text"
//                 name={"lastName"}
//               />
//               <ErrorMessage
//                 className={"error__feedback"}
//                 name="lastName"
//                 component="div"
//               />
//             </div>
//             <div className={`form__item ${errors.phone && "input__error"}`}>
//               <label>Telefon *</label>
//               <Field
//                 className="border-black border-2 rounded p-2"
//                 type="tel"
//                 name={"phoneNumber"}
//               />
//               <ErrorMessage
//                 className={"error__feedback"}
//                 name="phoneNumber"
//                 component="div"
//               />
//             </div>
//             <div className={`form__item ${errors.email && "input__error"}`}>
//               <label>E-mail *</label>
//               <Field
//                 className="border-black border-2 rounded p-2"
//                 type="email"
//                 name={"email"}
//               />
//               <p className={"error__feedback"}>{errors.email}</p>
//             </div>
//             <div className={`form__item ${errors.password && "input__error"}`}>
//               <label>Şifre *</label>
//               <Field
//                 className="border-black border-2 rounded p-2"
//                 type="password"
//                 name={"password"}
//               />
//               <p className={"error__feedback"}>{errors.password}</p>
//             </div>

//             <div
//               className={"form__item button__items d-flex justify-content-end"}
//             ></div>
//             <button type="submit">Next</button>
//           </form>
//         );
//       }}
//     </Formik>
//   );
// };
// export default DetailsStepper;

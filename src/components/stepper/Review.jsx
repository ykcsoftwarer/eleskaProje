import { Col, Row } from "antd";
import React, { useContext } from "react";
import MultiStepFormContext from "./MultiStepFormContext";

const Review = () => {
  const { details, address, next, prev } = useContext(MultiStepFormContext);
  return (
    <div className={"details__wrapper "}>
      <Row>
        <Col span={24} className="flex gap-3 flex-col mb-5">
          <h1 className="font-bold">DETAY BİLGİSİ</h1>
          <p>Ad : {details.firstName}</p>
          <p>Soyad : {details.lastName}</p>
          <p>Numara : {details.number}</p>
          <p>E-mail : {details.email}</p>
          <p>Şifre : {details.password}</p>
        </Col>
        <Col className="flex gap-3 flex-col " span={24}>
          <h1 className="font-bold mt-2">ADRES BİLGİSİ</h1>
          <p>Şehir : {address.city}</p>
          <p>Semt : {address.county}</p>
          <p>Adres : {address.addresses}</p>
          <div className={"form__item button__items flex justify-between mt-5"}>
            <button
              className="py-2 px-5 rounded smx:w-44 text-black bg-[#e0e0e0] hover:bg-black hover:text-[#e0e0e0] "
              onClick={prev}
            >
              Back
            </button>
            <button
              className="py-2 px-5  rounded smx:w-44 text-white bg-[#E12A32] hover:bg-[#e0e0e0] hover:text-[#E12A32]  "
              onClick={next}
            >
              Confirm
            </button>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default Review;

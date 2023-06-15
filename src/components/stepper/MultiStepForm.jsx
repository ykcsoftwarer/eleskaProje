import React, { useState } from "react";
import { Steps } from "antd";
import { Provider } from "./MultiStepFormContext";
import DetailsStepper from "./DetailsStepper";
import Address from "./Address";
import Review from "./Review";

const { Step } = Steps;

const detailsInitialState = {
  firstName: "",
  lastName: "",
  number: "",
  email: "",
  password: "",
  checkbox: false,
  checkbox1: false,
};

const addressInitialState = {
  city: "",
  county: "",
  addresses: "",
};

const renderStep = (step) => {
  switch (step) {
    case 0:
      return <DetailsStepper />;
    case 1:
      return <Address />;
    case 2:
      return <Review />;
    default:
      return null;
  }
};

const MultiStepForm = () => {
  const [details, setDetails] = useState(detailsInitialState);
  const [address, setAddress] = useState(addressInitialState);
  const [currentStep, setCurrentStep] = useState(0);

  const next = () => {
    if (currentStep === 2) {
      setCurrentStep(0);
      setDetails(detailsInitialState);
      setAddress(addressInitialState);
      return;
    }
    setCurrentStep(currentStep + 1);
  };
  const prev = () => setCurrentStep(currentStep - 1);
  return (
    <Provider value={{ details, setDetails, next, prev, address, setAddress }}>
      <Steps className={"details__wrapper"} current={currentStep}>
        <Step style={{ color: "red" }} title={"Formu doldurunuz"} />
        <Step title={"Adres detayları"} />
        <Step title={"Kaydet"} />
      </Steps>

      <main>{renderStep(currentStep)}</main>
    </Provider>
  );
};
export default MultiStepForm;

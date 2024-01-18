/* eslint-disable react/prop-types */
import Stepper from "react-stepper-horizontal";
import Feature from "./Feature";
import { useEffect, useState } from "react";

const MobileStepper = ({ category }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [formArray, setFormArray] = useState([]);
  const maxSteps = 4;

  useEffect(() => {
    localStorage.setItem("mobileFormData", JSON.stringify(formArray));
  }, [formArray]);

  const handleSubmit = () => {
    setFormArray((prevFormArray) => [...prevFormArray, formData]);
    setFormData({});
    setActiveStep(0);
  };

  const handleNext = (data) => {
    setFormData({ ...formData, ...data });

    setActiveStep((prevStep) => prevStep + 1);
  };
  const steps = [
    { title: "Step 1", href: "#", onClick: () => setActiveStep(0) },
    { title: "Step 2", href: "#", onClick: () => setActiveStep(1) },
    { title: "Step 3", href: "#", onClick: () => setActiveStep(2) },
    { title: "Step 4", href: "#", onClick: () => setActiveStep(3) },
  ];

  return (
    <div>
      <Stepper steps={steps} activeStep={activeStep} />
      <Feature
        category={category}
        step={activeStep}
        onNext={handleNext}
        maxSteps
      />
      {activeStep === maxSteps && (
        <div>
          <h3>Review and Confirm</h3>
          <pre>{JSON.stringify(formData, null, 2)}</pre>
          <button
            className="ml-5 bg-blue-300 p-3 w-24 rounded-xl "
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default MobileStepper;

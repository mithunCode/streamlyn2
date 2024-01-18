/* eslint-disable react/prop-types */

import { useState } from "react";

const Feature = ({ category, step, onNext, maxSteps }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = (e) => {
    e.preventDefault();

    onNext(formData);
  };
  console.log(formData, step);

  const renderFormInputs = () => {
    switch (step) {
      case 0:
        return (
          <div>
            <label className="text-lg">Model Name : </label>
            <input
              type="text"
              className="border border-black rounded-md outline-none p-1 mr-5"
              name="modelName"
              value={formData.modelName || ""}
              onChange={handleChange}
            />
            <button
              className="ml-5 bg-blue-300 p-3 w-24 rounded-xl "
              onClick={(e) => handleNext(e)}
            >
              Next
            </button>
          </div>
        );

      case 1:
        return (
          <div>
            <label>Camera Resolution:</label>
            <input
              value={formData.cameraResolution || ""}
              type="text"
              name="cameraResolution"
              onChange={handleChange}
              className="border border-black rounded-md outline-none p-1 mr-5"
            />
            <button
              className="ml-5 bg-blue-300 p-3 w-24 rounded-xl "
              onClick={(e) => handleNext(e)}
            >
              Next
            </button>
          </div>
        );

      case 2:
        return (
          <div>
            <label>Processor:</label>
            <input
              value={formData.processor || ""}
              type="text"
              name="processor"
              onChange={handleChange}
              className="border border-black rounded-md outline-none p-1 mr-5"
            />
            <button
              className="ml-5 bg-blue-300 p-3 w-24 rounded-xl "
              onClick={(e) => handleNext(e)}
            >
              Next
            </button>
          </div>
        );
      case 3:
        return (
          <div>
            <label>Storage:</label>
            <input
              type="text"
              name="storage"
              value={formData.storage || ""}
              onChange={handleChange}
              className="border border-black rounded-md outline-none p-1 mr-5"
            />
            <button
              className="ml-5 bg-blue-300 p-3 w-24 rounded-xl "
              onClick={(e) => handleNext(e)}
            >
              Next
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div>
      <form className="flex justify-center items-center">
        {renderFormInputs()}
        <div>
          {" "}
          {step < maxSteps - 1 && (
            <button type="button" onClick={handleNext}>
              Next
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Feature;

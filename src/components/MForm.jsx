import { useState } from "react";
import MobStepper from "./MobStepper";

const MForm = () => {
  const [selCategory, setSelCategory] = useState("");

  const handleCategoryChange = (category) => {
    setSelCategory(category);
  };

  return (
    <div className="">
      <label className="text-xl p-5 font-semibold text-center">
        Select Mobile Category:
      </label>
      <select onChange={(e) => handleCategoryChange(e.target.value)}>
        <option value="">Select Category</option>
        <option value="android">Android Mobiles</option>
        <option value="iphone">Iphones</option>
        <option value="keypad">Keypad Mobiles</option>
        <option value="windows">Windows Mobile</option>
      </select>
      {selCategory && <MobStepper category={selCategory} />}
    </div>
  );
};

export default MForm;

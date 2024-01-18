import { useEffect, useState } from "react";

const MobileList = () => {
  const [mobData, setMobData] = useState([]);
  const getMob = async () => {
    const data =
      (await JSON.parse(localStorage.getItem("mobileFormData"))) || [];
    setMobData(data);
  };

  useEffect(() => {
    getMob();
  }, []);
  console.log(mobData);
  return (
    <div>
      <h2>List of Mobiles</h2>
      {mobData &&
        mobData?.map((mobile, i) => <div key={i}>{mobile.modelName}</div>)}
    </div>
  );
};

export default MobileList;

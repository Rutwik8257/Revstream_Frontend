import React, { useState } from "react";
import Loader from "../../loader/Loader";
import EmailVerfication from "./../emailverfication/EmailVerfication";

const LostPassword = () => {
  let [loadData, setLoadData] = useState(false);
  setTimeout(() => {
    setLoadData(true);
  }, 2000);
  return <div>{loadData ? <EmailVerfication /> : <Loader />}</div>;
};

export default LostPassword;

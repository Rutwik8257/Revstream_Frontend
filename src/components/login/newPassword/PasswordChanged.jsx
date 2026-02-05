import React from "react";
import Background from "../../background/Background";

const PasswordChanged = () => {
  let passwordValue = () => {
    return (
      <>
        <p>✅</p>
        <p>Your password has been changed successfully</p>
      </>
    );
  };
  return <Background data={passwordValue} />;
};

export default PasswordChanged;

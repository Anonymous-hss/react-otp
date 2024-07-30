import React, { useEffect, useRef, useState } from "react";
import "./style.css";

function Opt({ optLenght = 6 }) {
  const [valueField, setValueField] = useState(new Array(optLenght).fill(""));
  const ref = useRef([]);

  const handleKeyDown = (e, index) => {
    const key = e.key;
    console.log(key);
    if (key === "ArrowRight") {
      if (index + 1 < optLenght) ref.current[index + 1].focus();
    }
    if (key === "ArrowLeft") {
      if (index > 0) ref.current[index - 1].focus();
    }
    const copyOtpFields = [...valueField];
    if (key === "Backspace") {
      copyOtpFields[index] = "";
      setValueField(copyOtpFields);
      if (index > 0) ref.current[index - 1].focus();

      return;
    }
    if (isNaN(key)) {
      return;
    }
    copyOtpFields[index] = key;
    if (index + 1 < optLenght) ref.current[index + 1].focus();
    setValueField(copyOtpFields);
  };
  useEffect(() => {
    ref.current["0"].focus();
  }, []);
  return (
    <div className="container">
      OTP
      <br />
      {valueField.map((value, index) => {
        return (
          <input
            key={index}
            ref={(currentInput) => (ref.current[index] = currentInput)}
            type="text"
            value={value}
            onKeyDown={(e) => handleKeyDown(e, index)}
          ></input>
        );
      })}
    </div>
  );
}

export default Opt;

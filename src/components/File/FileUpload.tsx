import React, { useRef, useState } from "react";
import Button from "@mui/material/Button";
import "react-dropdown/style.css";

const FileUpload = () => {
  const [status, setStatus] = useState();
  const [time, setTime] = useState();

  const handleOnChange = async (e: { target: { value: any } }) => {
    setStatus(e.target.value);
  };
  const handleOnChange_T = async (e: { target: { value: any } }) => {
    setTime(e.target.value);
  };
  const fileInput = useRef<HTMLInputElement | null>(null);

  const handleButtonClick = async (e: { target: any }) => {
    fileInput?.current.click();
  };

  const handleChange = async (e: { target: any }) => {
    console.log(e.target.files[0]);
  };

  return (
    <div>
      <Button onClick={handleButtonClick}>파일 업로드</Button>
      <input type="file" ref={fileInput} onChange={handleChange} style={{ display: "none" }} />
    </div>
  );
};

export default FileUpload;

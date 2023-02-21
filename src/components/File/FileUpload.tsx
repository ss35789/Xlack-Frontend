import React, { useRef, useState } from "react";
import Button from "@mui/material/Button";
import "react-dropdown/style.css";
import styled from "styled-components";

const FileUpload = () => {
  // const [status, setStatus] = useState();
  // const [time, setTime] = useState();
  //
  // const handleOnChange = async (e: { target: { value: any } }) => {
  //   setStatus(e.target.value);
  // };
  // const handleOnChange_T = async (e: { target: { value: any } }) => {
  //   setTime(e.target.value);
  // };
  // const fileInput = useRef<HTMLInputElement | null>(null);
  const fileInput = useRef(document.createElement("input"));

  const handleButtonClick = async (e: { target: any }) => {
    fileInput?.current.click();
  };

  const handleChange = async (e: { target: any }) => {
    console.log(e.target.files[0]);
  };

  return (
    <div>
      <FileButton onClick={handleButtonClick}>🗂️</FileButton>
      <input type="file" ref={fileInput} onChange={handleChange} style={{ display: "none" }} />
    </div>
  );
};

export default FileUpload;

const FileButton = styled.button`
  display: inline;
  padding: 1px;
  margin: 2px;
  font-size: 20px;
`;

import React, { useRef, useState } from "react";
import "react-dropdown/style.css";
import DialogContent from "@material-ui/core/DialogContent";
import Dialog from "@material-ui/core/Dialog";
import styled from "styled-components";
import { Button, Paper } from "@material-ui/core";
import { FileUploader } from "react-drag-drop-files";

const FileUpload = () => {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const fileInput = useRef(document.createElement("input"));
  const uploadedFiles: any[] = [];
  const fileArray: unknown[] = [];
  const handleChange = (file: any) => {
    setFile(file);
    uploadedFiles.push(file);
    console.log(file.name + "업로드 성공");
    console.log(uploadedFiles);
  };
  const clickToShow = async () => {
    console.log(uploadedFiles);
  };
  const handleClickToOpen = async () => {
    setOpen(true);
  };
  for (const element of uploadedFiles) {
    fileArray.push(<div>{element}</div>);
  }
  const handleToClose = async () => {
    setOpen(false);
  };
  const fileTypes = ["JPG", "PNG", "GIF", "ZIP"];

  return (
    <div>
      <FileButton onClick={handleClickToOpen}>🗂️</FileButton>
      <Dialog fullWidth={true} open={open} onClose={handleToClose} PaperComponent={StyledPaper}>
        <DialogContent>
          <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
          <Button onClick={clickToShow}>click to see files</Button>
          {fileArray}
        </DialogContent>
      </Dialog>
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

const StyledPaper = styled(Paper)`
  & {
    background-color: white;
    width: 600px;
    border-radius: 10px;
    padding: 15px;
  }
`;

import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import "react-dropdown/style.css";
import Dropdown from "react-dropdown";
import styled from "styled-components";
import { Paper } from "@material-ui/core";

const StatusManual = () => {
  const [open, setOpen] = React.useState(false);
  const handleClickToOpen = async () => {
    setOpen(true);
  };

  const handleToClose = async () => {
    setOpen(false);
  };
  const options = [
    "📆 In a meeting",
    "🚗 Communicating",
    "🤒 Sick",
    "vacationing",
    "working remotely",
    "customize",
  ];
  const times = ["1 hour", "2 hour", "3 hour"];
  const defaultOption = options[0];
  const defaultTime = times[0];
  return (
    <div>
      <StatusButton onClick={handleClickToOpen}>{options[0]}</StatusButton>
      <StatusButton onClick={handleClickToOpen}>{options[1]}</StatusButton>
      <StatusButton onClick={handleClickToOpen}>{options[2]}</StatusButton>
      <StatusButton onClick={handleClickToOpen}>{options[3]}</StatusButton>
      <StatusButton onClick={handleClickToOpen}>{options[4]}</StatusButton>
      <StatusButton onClick={handleClickToOpen}>{options[5]}</StatusButton>
      <Dialog
        fullWidth={true}
        open={open}
        onClose={handleToClose}
        PaperComponent={StyledPaper}
      >
        <DialogTitle>{"Set a status"}</DialogTitle>
        <DialogContent>
          <DialogContentText>This is Status Manual</DialogContentText>
        </DialogContent>
        <Dropdown
          options={options}
          value={defaultOption}
          placeholder="Select an option"
          children={"dropdown"}
        />
        <br />
        <Dropdown
          options={times}
          value={defaultTime}
          placeholder="Select an option"
          children={"dropdown"}
        />
        <DialogActions>
          <Button onClick={handleToClose} color="primary" autoFocus>
            Save
          </Button>
          <Button onClick={handleToClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default StatusManual;

const StyledPaper = styled(Paper)`
  & {
    background-color: aliceblue;
    max-width: revert;
    width: 1200px;
    border-radius: 10px;
  }
`;

const StatusButton = styled.button`
  width: 1200px;
  height: 40px;
  background-color: aliceblue;
  border: none;
  text-align: left;
  :hover {
    background-color: cornflowerblue;
  }
`;

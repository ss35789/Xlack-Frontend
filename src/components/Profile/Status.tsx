import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import "react-dropdown/style.css";
import Dropdown from "react-dropdown";
import { createTheme } from "@mui/material";
import { MuiThemeProvider, Paper } from "@material-ui/core";
import styled from "styled-components";

const Status = () => {
  const [open, setOpen] = React.useState(false);
  const handleClickToOpen = async () => {
    setOpen(true);
  };

  const handleToClose = async () => {
    setOpen(false);
  };
  const options = ["📆 In a meeting", "🚗 Communicating", "🤒 Sick"];
  const times = ["1 hour", "2 hour", "3 hour"];
  const defaultOption = options[0];
  const defaultTime = times[0];
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return (
    <div>
      <button onClick={handleClickToOpen}>Open Status box</button>
      <Dialog
        fullWidth={true}
        open={open}
        onClose={handleToClose}
        PaperComponent={StyledPaper}
      >
        <DialogTitle>{"Set a status"}</DialogTitle>
        <DialogContent>
          <DialogContentText>This is dialog box</DialogContentText>
        </DialogContent>
        <DefaultButton children={"sdfsdl"} />
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

export default Status;

const StyledPaper = styled(Paper)`
  & {
    background-color: aliceblue;
    max-width: revert;
    width: 1200px;
    border-radius: 10px;
  }
`;

const DefaultButton = styled.button`
  width: 1200px;
  height: 40px;
  background-color: dodgerblue;
  margin-top: 10px;
  margin-bottom: 10px;
`;

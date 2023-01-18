import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@mui/material/Button";
import "react-dropdown/style.css";
import styled from "styled-components";
import { Paper } from "@material-ui/core";
import StatusDefault from "./StatusDefault";

const StatusPanel = () => {
  const [open, setOpen] = React.useState(false);
  const [opendefault, setDefault] = React.useState(false);

  const handleClickToOpen = async () => {
    setOpen(true);
  };
  const detailClickToOpen = async () => {
    setDefault(true);
  };

  const handleToClose = async () => {
    setOpen(false);
  };

  return (
    <div>
      <button onClick={handleClickToOpen}>Open Status Panel</button>
      <Dialog fullWidth={true} scroll={"body"} open={open} onClose={handleToClose} PaperComponent={StyledPaper}>
        <DialogTitle>{"Set a status"}</DialogTitle>
        {!detailClickToOpen ? <DefaultButton onClick={detailClickToOpen} children={opendefault} /> : <StatusDefault />}
        <DialogActions>
          <Button onClick={handleToClose} variant="outlined" color="inherit" autoFocus>
            Close
          </Button>
          <Button onClick={handleToClose} variant="contained" color="success" autoFocus>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default StatusPanel;

const StyledPaper = styled(Paper)`
  & {
    background-color: white;
    max-width: max-content;
    width: 600px;
    border-radius: 10px;
    padding: 15px;
  }
`;

const DefaultButton = styled.button`
  width: 600px;
  height: 40px;
  background-color: dodgerblue;
  margin-top: 10px;
  margin-bottom: 10px;
`;

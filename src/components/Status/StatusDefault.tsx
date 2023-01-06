import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import "react-dropdown/style.css";
import styled from "styled-components";
import { Paper } from "@material-ui/core";

const StatusManual = () => {
  const [open, setOpen] = React.useState(false);
  const [detail, setDetail] = React.useState(false);

  const handleClickToOpen = async () => {
    setOpen(true);
  };
  const detailClickToOpen = async () => {
    setDetail(true);
  };

  const handleToClose = async () => {
    setOpen(false);
  };

  return (
    <div>
      <button onClick={handleClickToOpen}>Open Status Default</button>
      <Dialog
        fullWidth={true}
        open={open}
        onClose={handleToClose}
        PaperComponent={StyledPaper}
      >
        <DialogTitle>{"Set a status"}</DialogTitle>
        <DialogContent>
          <DialogContentText>This is default status</DialogContentText>
        </DialogContent>
        <DefaultButton children={detailOpen} />
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

const DefaultButton = styled.button`
  width: 1200px;
  height: 40px;
  background-color: dodgerblue;
  margin-top: 10px;
  margin-bottom: 10px;
`;

import axios from "axios";
import { at, backUrl } from "../../../variable/cookie";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { Button } from "antd";

const Settings = () => {
  const currentWorkspace = useSelector((state: RootState) => state.getMyWorkSpace.ClickedWorkSpace);
  const currentChannel = useSelector((state: RootState) => state.getMyWorkSpace.SearchedChannel);
  const DeleteChannel = async () => {
    await axios
      .delete(`${backUrl}channel/${currentWorkspace.hashed_value}/${currentChannel.hashed_value}/`, {
        headers: {
          Authorization: `Bearer ${at}`,
        },
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <>
      <h1>about Settings!</h1>
      <Button
        onClick={() => {
          DeleteChannel();
        }}
      >
        Delete this Channel!
      </Button>
    </>
  );
};

export default Settings;

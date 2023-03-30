import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import axios from "axios";
import { at, backUrl } from "../../../variable/cookie";

const About = () => {
  const rightClickedChannelData = useSelector((state: RootState) => state.getMyWorkSpace.SearchedChannel);
  const currentWorkspace = useSelector((state: RootState) => state.getMyWorkSpace);
  const editChannnelDesc = async () => {
    await axios
      .patch(
        `${backUrl}channel/${currentWorkspace.ClickedWorkSpace.hashed_value}/`,
        {},
        {
          headers: {
            Authorization: `Bearer ${at}`,
          },
        },
      )
      .catch(err => console.log(err));
  };
  return (
    <>
      <h1>about this channel!</h1>
      <hr />
      <h1>${rightClickedChannelData.description}</h1>
    </>
  );
};

export default About;

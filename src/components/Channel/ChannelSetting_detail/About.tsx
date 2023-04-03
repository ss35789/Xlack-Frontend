import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import axios from "axios";
import { at, backUrl } from "../../../variable/cookie";
import { useState } from "react";

const About = () => {
  const rightClickedChannelData = useSelector((state: RootState) => state.getMyWorkSpace.SearchedChannel);
  const currentWorkspace = useSelector((state: RootState) => state.getMyWorkSpace);
  const [showEditDescriptionModal, setShowEditDescriptionModal] = useState<boolean>(false);
  const [des, setDes] = useState<string>();
  const editChannnelDesc = async () => {
    await axios
      .patch(
        `${backUrl}channel/${currentWorkspace.ClickedWorkSpace.hashed_value}/`,
        {
          description: des,
          hashed_value: rightClickedChannelData,
        },
        {
          headers: {
            Authorization: `Bearer ${at}`,
          },
        },
      )
      .catch(err => console.log(err));
  };
  const SaveDes = (des :string)=>{
    setDes(des);
  }
}
  return (
    <>
      <div className="flex justify-between mt-6">
        <button
          style={{ color: "blue" }}
          onClick={() => {
            setShowEditDescriptionModal(true);
          }}
        >
          Edit
        </button>
      </div>
      <h1>about this channel!</h1>
      <hr />
      <h1>${rightClickedChannelData.description}</h1>
      {showEditDescriptionModal && <EditDescriptionModal description={()=>{SaveDes()}} />}
    </>
  );
};

const EditDescriptionModal = (props: any) => {
  const [description, setDescription] = useState<string>();
  return (
    <>
      <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="mt-10 sm:mt-0"></div>

            <div className="wrapper-center max-w-md">
              <div className="mt-5 md:col-span-2 md:mt-0">
                <div className="overflow-hidden shadow sm:rounded-md">
                  <div className="bg-white py-5 sm:p-6">설명 수정할 인풋 공간</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

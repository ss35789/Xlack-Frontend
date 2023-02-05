import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { useCallback, useState } from "react";
import axios from "axios";
import { at, backUrl } from "../../variable/cookie";
import styled from "styled-components";
import { EditProfileOnOff } from "../../variable/OnEditProfileSlice";
import { getMyProfile } from "../../variable/MyProfileSlice";
import EditcheckModal from "./EditcheckModal";

const EditProfile = () => {
  const formData = new FormData();
  const dispatch = useDispatch();
  const MyUser = useSelector((state: RootState) => state.getMyProfile.userData);
  const [EditUsername, setEditUsername] = useState(MyUser.username);
  const [EditDisplayName, setEditDisplayName] = useState(MyUser.display_name);
  const [EditTitle, setEditTitle] = useState(MyUser.title);
  const [EditNamePronunciation, setEditNamePronunciation] = useState("");
  const [selectedImg, setSelectedImg] = useState(MyUser.profile_image);
  const [PreviewPhoto, setPreviewPhoto] = useState(MyUser.profile_image);
  const [cancelCheck, setCancelCheck] = useState(false);
  const [UpdateCheck, setUpdateCheck] = useState({
    Update_username: false,
    Update_DisplayName: false,
    Update_Title: false,
    Update_NamePronunciation: false,
    Update_selectedImg: false,
    Updated: false,
  });
  const cancelCheckFunc = (cancel: boolean) => {
    setCancelCheck(cancel);
  };
  const onChangeEditUsername = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEditUsername(e.target.value);
      setUpdateCheck({ ...UpdateCheck, Update_username: true, Updated: true });
    },
    []
  );
  const onChangeEditDisplayName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEditDisplayName(e.target.value);
      setUpdateCheck({
        ...UpdateCheck,
        Update_DisplayName: true,
        Updated: true,
      });
    },
    []
  );
  const onChangeEditNamePronunciation = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEditNamePronunciation(e.target.value);
      setUpdateCheck({
        ...UpdateCheck,
        Update_NamePronunciation: true,
        Updated: true,
      });
    },
    []
  );
  const onChangeEditTitle = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEditTitle(e.target.value);
      setUpdateCheck({ ...UpdateCheck, Update_Title: true, Updated: true });
    },
    []
  );
  const selectImg = (e: any) => {
    setSelectedImg(e.target.files[0]);
    setPreviewPhoto(URL.createObjectURL(e.target.files[0]));
    setUpdateCheck({ ...UpdateCheck, Update_selectedImg: true, Updated: true });
  };
  const UpdateProfile = async () => {
    formData.append("username", EditUsername);
    formData.append("display_name", EditDisplayName);
    formData.append("title", EditTitle);
    if (UpdateCheck.Update_selectedImg)
      formData.append("profile_image", selectedImg);

    await axios
      .patch(`${backUrl}profile/`, formData, {
        headers: {
          Authorization: `Bearer ${at}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        window.alert("Complete Edit!");
        dispatch(getMyProfile(res.data));
        dispatch(EditProfileOnOff());
      })
      .catch((e) => {
        console.log(e.data);
        window.alert("Failed Edit Profile");
      });
  };

  return (
    <>
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="mt-10 sm:mt-0">
              {/*내부*/}

              <div className="max-w-md">
                <div className="mt-5 md:col-span-2 md:mt-0">
                  <div className="overflow-hidden shadow sm:rounded-md">
                    <div className="bg-white py-5 sm:p-6">
                      <h1 className="flex text-lg">Edit your Profile</h1>
                      <hr />

                      <div className="flex">
                        <div className="px-4">
                          <div className="col-span-6 sm:col-span-4 py-1 mt-10">
                            <div>
                              <label
                                htmlFor="email-address"
                                className="flex text-sm font-medium text-gray-700"
                              >
                                Full name
                              </label>
                              <input
                                type="text"
                                value={EditUsername}
                                onChange={onChangeEditUsername}
                                placeholder={MyUser.username}
                                className="mt-1 block w-full h-8 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              />
                            </div>
                            <div className="col-span-6 sm:col-span-4 mt-10">
                              <label
                                htmlFor="email-address"
                                className="flex text-sm font-medium text-gray-700"
                              >
                                Display name
                              </label>
                              <input
                                type="text"
                                value={EditDisplayName}
                                onChange={onChangeEditDisplayName}
                                placeholder={MyUser.display_name}
                                className="mt-1 block w-full h-8 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              />
                              <h1 className="text-sm text-left opacity-60">
                                This could be your first name, or a nickname —
                                however you’d like people to refer to you in
                                Slack.
                              </h1>
                            </div>

                            <div className="col-span-6 sm:col-span-4 mt-10">
                              <label
                                htmlFor="email-address"
                                className="flex text-sm font-medium text-gray-700"
                              >
                                Title
                              </label>
                              <input
                                type="text"
                                value={EditTitle}
                                onChange={onChangeEditTitle}
                                placeholder={MyUser.title}
                                className="mt-1 block w-full h-8 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              />
                              <h1 className="text-sm text-left opacity-60">
                                Let people know what you do at Mylène Farmer
                                Team.
                              </h1>
                            </div>

                            <div className="col-span-6 sm:col-span-4 mt-10">
                              <label
                                htmlFor="email-address"
                                className="flex text-sm font-medium text-gray-700"
                              >
                                Name pronunciation
                              </label>
                              <input
                                type="text"
                                value={EditNamePronunciation}
                                onChange={onChangeEditNamePronunciation}
                                placeholder="Zoe (pronounced 'zo-ee')"
                                className="mt-1 block w-full h-8 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              />
                              <h1 className="text-sm text-left opacity-60">
                                This could be a phonetic pronunciation, or an
                                example of something your name sounds like.
                              </h1>
                            </div>

                            <div className="col-span-6 sm:col-span-3 mt-10">
                              <label
                                htmlFor="country"
                                className="flex block text-sm font-medium text-gray-700"
                              >
                                Time zone
                              </label>
                              <select
                                id="country"
                                name="country"
                                autoComplete="country-name"
                                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                              >
                                <option>United States</option>
                                <option>Canada</option>
                                <option>Mexico</option>
                              </select>
                              <h1 className="text-sm text-left opacity-60">
                                Your current time zone. Used to send summary and
                                notification emails, for times in your activity
                                feeds, and for reminders.
                              </h1>
                            </div>
                          </div>
                        </div>
                        <div className="mt-10">
                          <h1 className="flex text-sm font-medium text-gray-700 flex-grow">
                            Profile image
                          </h1>
                          <img src={PreviewPhoto} width="200" height="200" />
                          {/*testcode defaultImg => MyUser.profile_image*/}

                          <label htmlFor="profile_img">
                            <CustomDiv>Upload Image</CustomDiv>
                          </label>
                          <input
                            id="profile_img"
                            type="file"
                            style={{ display: "none" }}
                            accept="image/jpg,impge/png,image/jpeg,image/gif"
                            name="profile_img"
                            onChange={selectImg}
                          ></input>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-100 px-4 py-3 text-right sm:px-6">
                      <button
                        onClick={() => {
                          if (UpdateCheck.Updated) setCancelCheck(true);
                          else dispatch(EditProfileOnOff());
                        }}
                        className="inline-flex justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-black shadow-sm hover:bg-indigo-700 focus:outline-black focus:ring-2 focus:ring-black-500 focus:ring-offset-2"
                      >
                        Cancel
                      </button>

                      <button
                        onClick={UpdateProfile}
                        className="ml-5 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/*내부*/}
            </div>
          </div>
        </div>
      </div>

      <EditcheckModal show={cancelCheck} returnFunc={cancelCheckFunc} />
    </>
  );
};

const CustomDiv = styled.div`
  margin-top: 12px;
  width: 150px;
  height: 30px;
  background: #fff;
  border: 1px solid rgb(77, 77, 77);
  border-radius: 10px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    background: rgb(77, 77, 77);
    color: #fff;
  }
`;

export default EditProfile;

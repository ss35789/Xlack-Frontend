import defaultImg from "./defaultProfileImg.jpeg";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { useCallback, useState } from "react";
import axios from "axios";
import { at, backUrl } from "../../variable/cookie";
import { switchOnOff } from "../../variable/OnEditProfileSlice";

const EditProfile = () => {
  const formData = new FormData();
  const dispatch = useDispatch();
  const MyUser = useSelector((state: RootState) => state.getMyProfile.userData);
  const [EditUsername, setEditUsername] = useState("");
  const [EditDisplayName, setEditDisplayName] = useState("");
  const [EditTitle, setEditTitle] = useState("");
  const [EditProfileImage, setEditProfileImage] =
    useState<FormDataEntryValue>();

  const onChangeEditUsername = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEditUsername(e.target.value);
    },
    []
  );
  const onChangeEditDisplayName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEditDisplayName(e.target.value);
    },
    []
  );
  const onChangeEditTitle = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEditTitle(e.target.value);
    },
    []
  );

  const selectImg = (e: any) => {
    const img = e.target.files[0];
    console.log(img);
  };
  const UpdateProfile = async () => {
    const dataSet = {
      username: { EditUsername },
      email: {},
      display_name: { EditDisplayName },
      title: { EditTitle },
      phone_number: {},
      profile_image: { EditProfileImage },
    };
    formData.append("data", JSON.stringify(dataSet));
    await axios
      .post(`${backUrl}profile/`, formData, {
        headers: {
          Authorization: `Bearer ${at}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => console.log("Complete Edit!"))
      .finally(() => dispatch(switchOnOff()));
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
                  <form onSubmit={UpdateProfile} action="">
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
                                  name="email-address"
                                  id="email-address"
                                  autoComplete="email"
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
                                  name="email-address"
                                  id="email-address"
                                  autoComplete="email"
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
                                  name="email-address"
                                  id="email-address"
                                  autoComplete="email"
                                  value={EditTitle}
                                  onChange={onChangeEditTitle}
                                  placeholder="Title"
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
                                  name="email-address"
                                  id="email-address"
                                  autoComplete="email"
                                  value={EditTitle}
                                  onChange={onChangeEditTitle}
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
                                  Your current time zone. Used to send summary
                                  and notification emails, for times in your
                                  activity feeds, and for reminders.
                                </h1>
                              </div>
                            </div>
                          </div>
                          <div className="mt-10">
                            <h1 className="flex text-sm font-medium text-gray-700 flex-grow">
                              Profile photo
                            </h1>
                            <img src={defaultImg} width="200" height="200" />
                            <CustomButton onClick={selectImg}>
                              Upload Photo
                            </CustomButton>
                            {/*<input*/}
                            {/*  type="button"*/}
                            {/*  value="업로드"*/}
                            {/*  onClick={selectImg}*/}
                            {/*/>*/}
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-100 px-4 py-3 text-right sm:px-6">
                        <button
                          type="submit"
                          className="inline-flex justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-black shadow-sm hover:bg-indigo-700 focus:outline-black focus:ring-2 focus:ring-black-500 focus:ring-offset-2"
                        >
                          Cancel
                        </button>

                        <button
                          type="submit"
                          className="ml-5 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              {/*내부*/}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const CustomButton = styled.button`
  margin-top: 10px;
  display: inline-block;
  padding: 1px 40px;
  border: 1px solid #4f4f4f;
  border-radius: 4px;
  transition: all 0.2s ease-in;
  position: relative;
  overflow: hidden;
  font-size: 19px;
  color: black;
  z-index: 1;
  white-space: nowrap;

  :before {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%) scaleY(1) scaleX(1.25);
    top: 100%;
    width: 140%;
    height: 180%;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 50%;
    display: block;
    transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
    z-index: -1;
  }

  :after {
    content: "";
    position: absolute;
    left: 55%;
    transform: translateX(-50%) scaleY(1) scaleX(1.45);
    top: 180%;
    width: 160%;
    height: 190%;
    background-color: #39bda7;
    border-radius: 50%;
    display: block;
    transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
    z-index: -1;
  }

  :hover {
    color: #ffffff;
    border: 1px solid #39bda7;
  }

  :hover:before {
    top: -35%;
    background-color: #39bda7;
    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
  }

  :hover:after {
    top: -45%;
    background-color: #39bda7;
    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
  }
`;

export default EditProfile;

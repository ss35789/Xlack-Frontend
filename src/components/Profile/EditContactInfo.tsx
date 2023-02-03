import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { useCallback, useState } from "react";
import axios from "axios";
import { at, backUrl } from "../../variable/cookie";
import { EditContactInfoOnOff } from "../../variable/OnEditProfileSlice";
import { getMyProfile } from "../../variable/MyProfileSlice";
import EditCloseCheckModal from "./EditCloseCheckModal";

const EditContactInfo = () => {
  const formData = new FormData();
  const dispatch = useDispatch();
  const MyUser = useSelector((state: RootState) => state.getMyProfile.userData);
  const [EditEmail, setEditEmail] = useState(MyUser.email);
  const [EditPhone, setEditPhone] = useState(MyUser.phone_number);
  const [cancelCheck, setCancelCheck] = useState(false);
  const [UpdateCheck, setUpdateCheck] = useState({
    Update_Email: false,
    Update_Phone: false,
    Updated: false,
  });
  const cancelCheckFunc = (cancel: boolean) => {
    setCancelCheck(cancel);
  };
  const onChangeEditEmail = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEditEmail(e.target.value);
      setUpdateCheck({ ...UpdateCheck, Update_Email: true, Updated: true });
    },
    []
  );
  const onChangeEditPhone = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEditPhone(e.target.value);
      setUpdateCheck({ ...UpdateCheck, Update_Phone: true, Updated: true });
    },
    []
  );

  const UpdateProfile = async () => {
    formData.append("username", MyUser.username);
    formData.append("email", EditEmail);
    formData.append("phone_number", EditPhone);
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
        dispatch(EditContactInfoOnOff());
      })
      .catch((e) => {
        console.log(e.data);
        window.alert("Failed Edit ContactInfo");
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

              <div className="wrapper-center max-w-md">
                <div className="mt-5 md:col-span-2 md:mt-0">
                  <div className="overflow-hidden shadow sm:rounded-md">
                    <div className="bg-white py-5 sm:p-6">
                      <h1 className="flex text-lg">Edit Contact information</h1>
                      <hr />

                      <div className="flex">
                        <div className="px-4">
                          <div className="col-span-6 sm:col-span-4 py-1 mt-10">
                            <div>
                              <label
                                htmlFor="email-address"
                                className="flex text-sm font-medium text-gray-700"
                              >
                                Email Address
                              </label>
                              <input
                                type="text"
                                value={EditEmail}
                                onChange={onChangeEditEmail}
                                placeholder={MyUser.email}
                                className="mt-1 block w-full h-8 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              />
                            </div>
                            <div className="col-span-6 sm:col-span-4 mt-10">
                              <label
                                htmlFor="email-address"
                                className="flex text-sm font-medium text-gray-700"
                              >
                                Phone
                              </label>
                              <input
                                type="text"
                                value={EditPhone}
                                onChange={onChangeEditPhone}
                                placeholder={MyUser.phone_number}
                                className="mt-1 block w-full h-8 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-100 px-4 py-3 text-right sm:px-6">
                    <button
                      onClick={() => {
                        if (UpdateCheck.Updated) setCancelCheck(true);
                        else dispatch(EditContactInfoOnOff());
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
      <EditCloseCheckModal show={cancelCheck} returnFunc={cancelCheckFunc} />
    </>
  );
};

export default EditContactInfo;
